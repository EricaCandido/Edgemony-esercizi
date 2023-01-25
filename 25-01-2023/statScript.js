//AVANZATO

import myJson from "./mock.json" assert { type: "json" };

const wrapperEl = document.createElement("div");
wrapperEl.className = "wrapper_";
wrapperEl.textContent = "Age range:";

const ageStatusBarGen = (value, userAge) => {
  const barEl = document.createElement("div");
  const statusBar = document.createElement("div");

  barEl.className = "bar";
  statusBar.className = "status_bar";

  barEl.textContent = value;
  statusBar.style.height = `${userAge * 20}px`;

  barEl.appendChild(statusBar);
  wrapperEl.appendChild(barEl);

  return wrapperEl;
};

const bodyEl = document.querySelector("body");
bodyEl.appendChild(wrapperEl);
let counter = [];
const userAge = myJson.users.map((user) => user.age);
const to25 = { ages: userAge.filter((age) => age <= 25), title: "0>25" };
const to40 = {
  ages: userAge.filter((age) => age > 25 && age <= 40),
  title: "26>40",
};
const to80 = {
  ages: userAge.filter((age) => age > 40 && age <= 80),
  title: "41 > 80",
};
counter.push(to25, to40, to80);

counter.forEach((count) =>
  bodyEl.appendChild(ageStatusBarGen(count.title, count.ages.length))
);
