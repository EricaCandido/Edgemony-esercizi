import { GET } from "./fetch.js";

const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const cardGenerator = (obj) => {
  const containerEl = cE("div");
  const textEl = cE("div");
  const imageEl = cE("img");
  const name_ageEl = cE("h3");
  const cityEl = cE("h5");
  const likeEl = cE("div");

  const genderEl = cE("p");

  containerEl.className = "container";
  imageEl.className = "user_image";
  textEl.className = "text";
  likeEl.className = "like";

  imageEl.setAttribute("src", obj.image);
  name_ageEl.textContent = obj.firstName + ", " + obj.age;
  cityEl.textContent = obj.address.city;
  genderEl.textContent = obj.gender;
  likeEl.textContent = "♥";

  textEl.append(name_ageEl, cityEl, genderEl);
  containerEl.append(imageEl, textEl, likeEl);

  return containerEl;
};

//ESERCIZIO 1
// GET("https://dummyjson.com/users").then((data) =>
//   data.users.map((user) => {
//     bodyEl.appendChild(cardGenerator(user));
//   })
// );

//ESERCIZIO 2
const bodyEl = qS("body");
const searchEl = cE("input");
const headerEl = cE("div");
const titleEl = qS(".title");
searchEl.className = "search";
headerEl.className = "header";

let searchedValue = "";

headerEl.append(titleEl, searchEl);
bodyEl.appendChild(headerEl);

searchEl.addEventListener("input", (e) => {
  userDelete();
  searchedValue = e.target.value;
  GET("https://dummyjson.com/users").then((data) =>
    data.users.map((user) => {
      if (user.firstName.includes(searchedValue))
        bodyEl.appendChild(cardGenerator(user));
    })
  );
});

const userDelete = () => {
  const userEls = document.querySelectorAll(".container");

  userEls.forEach((user) => user.remove());
};
