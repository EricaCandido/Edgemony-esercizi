const bodyEl = document.querySelector("body");
const openButtonEl = document.createElement("button");
const loaderElement = document.createElement("p");
const generalTitleEl = document.createElement("h1");
const sectionEl = document.createElement("section");

generalTitleEl.textContent = "Welcome to the e-commerce page";
openButtonEl.className = "open_btn";
openButtonEl.textContent = "Have a look!";
const sellEl = document.querySelector(".sell");
sectionEl.className = "section";
loaderElement.className = "loader";

bodyEl.append(generalTitleEl, openButtonEl, sellEl, loaderElement);

const cart = [];

openButtonEl.addEventListener("click", () => {
  loaderElement.textContent = "Just a few seconds...";
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      headerGenerator();
      cardGenerator(data);
    })
    .catch((e) => {
      loaderElement.textContent = "Oops, something went wrong...";
      console.log("MYERROR", e);
    });
});

const headerGenerator = () => {
  loaderElement.remove();
  const headerEl = document.createElement("header");
  const logoEl = document.createElement("h1");
  const hamburgerEl = document.createElement("div");
  const line1El = document.createElement("div");
  const line2El = document.createElement("div");
  const line3El = document.createElement("div");
  const tendinaEl = document.createElement("div");

  logoEl.textContent = "LOGO";
  hamburgerEl.className = "hamburger";
  tendinaEl.className = "tendina";
  line1El.className = "line";
  line2El.className = "line";
  line3El.className = "line";

  bodyEl.append(headerEl, sectionEl);
  headerEl.append(logoEl, generalTitleEl, hamburgerEl, tendinaEl);

  hamburgerEl.append(line1El, line2El, line3El);

  hamburgerEl.addEventListener("click", () => {
    tendinaEl.classList.toggle("show");
  });
};

const cardGenerator = (value) => {
  openButtonEl.remove();

  value.forEach((item) => {
    const cardEl = document.createElement("div");
    const imgEl = document.createElement("img");
    const titleEl = document.createElement("h1");
    const priceEl = document.createElement("h3");
    const descrEl = document.createElement("p");
    const buyBtnEl = document.createElement("button");

    cardEl.className = "card";
    imgEl.className = "img_";
    titleEl.className = "title";
    priceEl.className = "price";
    descrEl.className = "description";
    buyBtnEl.className = "buy_btn";

    imgEl.setAttribute("src", item.images[0]);
    imgEl.setAttribute("alt", "img");
    titleEl.textContent = item.title.slice(0, 10);
    priceEl.textContent = item.price + "$ ";
    descrEl.textContent = item.description.slice(0, 30);
    buyBtnEl.textContent = "Add to cart";

    buyBtnEl.addEventListener("click", () => {
      cartPopulator(item);
    });

    cardEl.append(imgEl, titleEl, priceEl, descrEl, buyBtnEl);
    sectionEl.appendChild(cardEl);
  });
};

const cartCreation = () => {
  const tendinaEl = document.querySelector(".tendina");

  tendinaEl.innerHTML = "";
  tendinaEl.textContent = "Your cart: ";
  cart.forEach((item, index) => {
    const cartEl = document.createElement("div");
    cartEl.className = "cartRow";
    cartEl.innerHTML = `<p>Q.ty: ${item.qty}</p><p>${item.title}</p><p>${item.price}</p>`;
    const removeBtnEl = document.createElement("button");
    removeBtnEl.className = "remove_btn";
    removeBtnEl.textContent = "Remove item";

    removeBtnEl.addEventListener("click", () => {
      cartEl.remove();
      cart.splice(index, 1);
    });

    cartEl.append(removeBtnEl);
    tendinaEl.appendChild(cartEl);
  });
};

const cartPopulator = (item) => {
  const newObj = {
    id: item.id,
    title: item.title,
    price: item.price + "$",
    qty: 1,
  };

  const search = cart.filter((element) => {
    if (element.id === newObj.id) {
      element.qty++;
      return element;
    }
  });

  if (search.length === 0) {
    cart.push(newObj);
  }
  cartCreation();
};
