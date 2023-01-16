// ESERCIZIO 1
// fetch("https://api.escuelajs.co/api/v1/products")
//   .then((res) => res.json())
//   .then((data) => {
//     dataGenerator(data);
//   });

// const dataGenerator = (value) => {
//   value.forEach((item) => {
//     console.log("--------------");
//     console.log(item.title);
//     console.log(item.description);
//   });
// };

//AVANZATO
const bodyEl = document.querySelector("body");
const openButtonEl = document.createElement("button");
const loaderElement = document.createElement("p");
const generalTitleEl = document.createElement("h1");
const sectionEl = document.createElement("section");

generalTitleEl.textContent = "Welcome to the e-commerce page";
openButtonEl.className = "open_btn";
openButtonEl.textContent = "Have a look!";
sectionEl.className = "section";
loaderElement.className = "loader";

bodyEl.append(generalTitleEl, openButtonEl, sectionEl, loaderElement);

openButtonEl.addEventListener("click", () => {
  loaderElement.textContent = "Just a few seconds...";
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      cardGenerator(data);
    })
    .catch((e) => {
      loaderElement.textContent = "Oops, something went wrong...";
      console.log("MYERROR", e);
    });
});

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
    titleEl.textContent = item.title;
    priceEl.textContent = item.price + "$ ";
    descrEl.textContent = item.description;
    buyBtnEl.textContent = "Buy";

    sectionEl.appendChild(cardEl);
    cardEl.append(imgEl, titleEl, priceEl, descrEl, buyBtnEl);
    loaderElement.remove();
  });
};
