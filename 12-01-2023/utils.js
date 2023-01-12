const qS = (element) => document.querySelector(element);
const qSA = (element) => document.querySelectorAll(element);
const cE = (element) => document.createElement(element);

const todoGenerator = (n) => {
  const bodyEl = qS("body");
  const cardEl = cE("div");
  const cardTitleEl = cE("h3");

  const isCompletedEl = cE("button");
  const textInputEl = cE("input");

  cardEl.className = "card";
  cardTitleEl.className = "card_title";
  cardTitleEl.textContent = "Note n°" + " " + n;
  textInputEl.className = "text-input";
  textInputEl.placeholder = "Your note";
  isCompletedEl.className = "check-btn";

  bodyEl.appendChild(cardEl);
  cardEl.append(cardTitleEl, textInputEl, isCompletedEl);

  isCompletedEl.addEventListener("click", () => {
    isCompletedEl.classList.toggle("completed");
  });
};

export { qS, qSA, cE, todoGenerator };
