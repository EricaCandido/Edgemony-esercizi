//ESERCIZIO 1

import myJson from "./mock.json" assert { type: "json" };

const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const bodyEl = qS("body");
const wrapperEl = cE("div");

wrapperEl.className = "wrapper";

bodyEl.appendChild(wrapperEl);

const cardGenerator = (obj) => {
  const containerEl = cE("div");
  const textEl = cE("div");
  const imageEl = cE("img");
  const name_ageEl = cE("h3");
  const cityEl = cE("h5");
  const hobbyEl = cE("p");

  const genderEl = cE("p");

  containerEl.className = "container";
  imageEl.className = "user_image";
  textEl.className = "text";
  hobbyEl.className = "hobby";

  imageEl.setAttribute("src", obj.image);
  name_ageEl.textContent = obj.name + ", " + obj.age;
  cityEl.textContent = obj.city;
  genderEl.textContent = obj.gender;
  hobbyEl.textContent = "Fav hobby: " + obj.hobby;

  textEl.append(name_ageEl, cityEl, hobbyEl, genderEl);
  containerEl.append(imageEl, textEl);

  return containerEl;
};

myJson.users.map((user) => {
  wrapperEl.appendChild(cardGenerator(user));
});
