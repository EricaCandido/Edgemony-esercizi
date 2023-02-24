const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const GET = async (endpoint) => {
  const res = await fetch(endpoint);
  const data = await res.json();
  return data;
};

const cardGenerator = (obj) => {
  const loaderEl = qS(".loader");
  loaderEl.textContent = "";
  const cardContainerEl = cE("div");
  const cardImageEl = cE("img");
  const cardTextAndBtnEl = cE("div");
  const cardTextEl = cE("div");
  const cityEl = cE("h2");
  const countryEl = cE("h4");
  const headlineEl = cE("h5");
  const descriptionEl = cE("p");
  const viewMoreEl = cE("button");

  cardContainerEl.className = "card-container";
  cardImageEl.className = "card-image";
  cardTextAndBtnEl.className = "card-text-btn";
  cardTextEl.className = "card-text";
  descriptionEl.className = "card-description";
  viewMoreEl.className = "view-more-btn";
  cityEl.className = "city-name";

  cardImageEl.setAttribute("src", obj.cover_image_url);

  cityEl.textContent = obj.name;
  countryEl.textContent = obj.country.name;
  headlineEl.textContent = obj.headline;
  viewMoreEl.textContent = "View more";

  if (headlineEl.textContent === "" || headlineEl.textContent.length > 35) {
    headlineEl.textContent = `Cosa vedere a ${obj.name}`;
  }

  descriptionEl.textContent = `${obj.content.slice(0, 350)}...`;

  cardTextEl.append(cityEl, countryEl, headlineEl, descriptionEl);
  cardTextAndBtnEl.append(cardTextEl, viewMoreEl);
  cardContainerEl.append(cardImageEl, cardTextAndBtnEl);

  viewMoreEl.addEventListener("click", () => {
    if (descriptionEl.textContent.length < 355) {
      descriptionEl.innerHTML = "";
      descriptionEl.textContent = `${obj.content.slice(0, 600)}...`;
      viewMoreEl.textContent = "View less";
    } else {
      descriptionEl.innerHTML = "";
      descriptionEl.textContent = `${obj.content.slice(0, 350)}...`;
      viewMoreEl.textContent = "View more";
    }
  });

  return cardContainerEl;
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// const arr = id_destinations,
//   destinations = id_destinations.length,
//   total = destinations - 1,
//   index = getRandomInt(0, total);

// console.log(arr[index]);

// cardGenerator()

export { GET, cardGenerator, qS, cE, getRandomInt };
