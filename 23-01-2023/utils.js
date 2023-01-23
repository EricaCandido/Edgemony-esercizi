export { qS, cE, cardGenerator, getRandomInt };

const qS = (element) => document.querySelector(element);
const cE = (element) => document.createElement(element);

const cardGenerator = (data) => {
  const cardEl = cE("div");
  const textEl = cE("div");
  const quoteEl = cE("p");
  const authorEl = cE("h4");
  const containerEl = qS(".card_container");

  containerEl.innerHTML = "";

  cardEl.className = "card";
  textEl.className = "all_text";
  authorEl.className = "author";
  quoteEl.textContent = data.quote;
  authorEl.textContent = data.author;

  containerEl.appendChild(cardEl);
  cardEl.appendChild(textEl);
  textEl.append(quoteEl, authorEl);
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
