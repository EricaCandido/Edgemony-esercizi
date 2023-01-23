import { qS, cE, cardGenerator } from "./utils.js";
import { GET } from "./api.js";

//ESERCIZIO 1

// GET("quotes/5").then((data) => cardGenerator(data));

//ESERCIZIO 2

const quoteBtn = cE("button");
const bodyEl = qS("body");
const containerEl = cE("div");

containerEl.className = "card_container";
quoteBtn.className = "quote_btn";
quoteBtn.textContent = "Click for a random quote";

bodyEl.appendChild(containerEl);
bodyEl.appendChild(quoteBtn);

//questo endpoint genera una citazione random ma sempre la stessa
// quoteBtn.addEventListener("click", () =>
//   GET("quotes/random").then((data) => cardGenerator(data))
// );

quoteBtn.addEventListener("click", () =>
  GET("quotes/").then((data) => cardGenerator(data))
);
