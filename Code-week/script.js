import { GET, cardGenerator, qS, cE, getRandomInt } from "./utils.js";

//hero
// const heroImages = [
//   "./img/hero-ocean2.jpg",
//   "./img/hero-adventure2.jpg",
//   "./img/hero-relax.jpg",
// ];
// const heroText = [
//   'It\'s a big word out there...  "Man cannot discover new oceans unless he has the courage to lose sight of the shore"',
//   "It's time for adventures",
//   "Just relax & enjoy",
// ];

// let heroImgCounter = 0;

// const heroEl = qS("hero");
// const wrapperEl = cE("div");
// const heroImgEl = cE("img");
// const textEl = cE("h3");

// wrapperEl.className = "wrapper";

// heroImgEl.setAttribute("src", heroImages[0]);

// setInterval(() => {
//   heroImgEl.src = heroImages[heroImgCounter];
//   textEl.textContent = heroText[heroImgCounter];
//   heroImgEl.className = `image${heroImgCounter}`;
//   textEl.className = `text-img${heroImgCounter}`;
//   heroImgCounter++;

//   if (heroImgCounter >= heroImages.length) {
//     heroImgCounter = 0;
//   }
// }, 3000);
// wrapperEl.appendChild(textEl);
// wrapperEl.appendChild(heroImgEl);
// heroEl.appendChild(wrapperEl);

const heroImages = [
  "./img/hero-ocean2.jpg",
  "./img/hero-adventure2.jpg",
  "./img/hero-relax.jpg",
];
const heroText = [
  'It\'s a big word out there...  "Man cannot discover new oceans unless he has the courage to lose sight of the shore"',
  "It's time for adventures",
  "Just relax & enjoy",
];

const heroEl = qS("hero");
const wrapperEl = cE("div");
const Img1El = cE("img");
const Img2El = cE("img");
const Img3El = cE("img");
const text1El = cE("h3");
const text2El = cE("h3");
const text3El = cE("h3");

wrapperEl.className = "wrapper";

Img1El.setAttribute("src", heroImages[0]);
Img2El.setAttribute("src", heroImages[1]);
Img3El.setAttribute("src", heroImages[2]);

text1El.textContent = heroText[0];
text2El.textContent = heroText[1];
text3El.textContent = heroText[2];

Img1El.className = "hero-image";
Img2El.className = "hero-image";
Img3El.className = "hero-image";

text1El.className = "hero-txt";
text2El.className = "hero-txt";
text3El.className = "hero-txt";
text1El.classList.add("long");

setInterval(() => {
  Img1El.classList.add("visualize");
  text1El.classList.add("visualize");
  Img2El.classList.remove("visualize");
  text2El.classList.remove("visualize");
  Img3El.classList.remove("visualize");
  text3El.classList.remove("visualize");
}, 3000);

setInterval(() => {
  Img2El.classList.add("visualize");
  text2El.classList.add("visualize");
  Img1El.classList.remove("visualize");
  text1El.classList.remove("visualize");
  Img3El.classList.remove("visualize");
  text3El.classList.remove("visualize");
}, 6000);

setInterval(() => {
  Img3El.classList.add("visualize");
  text3El.classList.add("visualize");
  Img1El.classList.remove("visualize");
  text1El.classList.remove("visualize");
  Img2El.classList.remove("visualize");
  text2El.classList.remove("visualize");
}, 9000);

wrapperEl.append(text1El, text2El, text3El);
wrapperEl.append(Img1El, Img2El, Img3El);
heroEl.appendChild(wrapperEl);

//cards

const cardScontainerEl = qS(".cardS-container");

//mostra città POPOLARI di default
GET("https://api.musement.com/api/v3/cities").then((data) => {
  const mostPopular = data.filter((city) => city.show_in_popular === true);
  mostPopular.map((popCity) => {
    cardScontainerEl.appendChild(cardGenerator(popCity));
  });
});

//toggle tra città popolari e tutte le città
const showAllBtn = qS(".show");
showAllBtn.addEventListener("click", () => {
  showAllBtn.classList.toggle("-all");
  resultsEl.textContent = "";
  if (showAllBtn.className === "show") {
    cardScontainerEl.innerHTML = "";
    showAllBtn.innerHTML = "";
    showAllBtn.textContent = "Show all";

    GET("https://api.musement.com/api/v3/cities").then((data) => {
      const mostPopular = data.filter((city) => city.show_in_popular === true);
      mostPopular.map((popCity) => {
        cardScontainerEl.appendChild(cardGenerator(popCity));
      });
    });
  } else if (showAllBtn.className === "show -all") {
    cardScontainerEl.innerHTML = "";
    showAllBtn.innerHTML = "";
    showAllBtn.textContent = "Show popular";
    GET("https://api.musement.com/api/v3/cities").then((data) =>
      data.map((city) => {
        cardScontainerEl.appendChild(cardGenerator(city));
      })
    );
  }
});

//Funzione search

const inputEl = qS(".search");

const resultsEl = qS(".results");

inputEl.addEventListener("change", () => {
  cardScontainerEl.innerHTML = "";
  heroEl.innerHTML = "";
  GET("https://api.musement.com/api/v3/cities").then((data) => {
    const newData = data.filter((item) =>
      item.name.toLowerCase().includes(inputEl.value)
    );

    resultsEl.textContent = "Results: ";

    newData.map((city) => cardScontainerEl.appendChild(cardGenerator(city)));
  });
});

//tasto destinazione random
const randomDestEl = qS(".random-btn");
const yourDestEl = qS(".your-destination");
randomDestEl.addEventListener("click", () => {
  cardScontainerEl.innerHTML = "";
  heroEl.innerHTML = "";
  yourDestEl.textContent = "That destination seems talking about you!";
  GET("https://api.musement.com/api/v3/cities").then((data) => {
    const allDestinations = data.map((city) => city);
    cardScontainerEl.appendChild(
      cardGenerator(
        allDestinations[getRandomInt(0, allDestinations.length - 1)]
      )
    );
    console.log(allDestinations[getRandomInt(0, allDestinations.length - 1)]);
  });
});
