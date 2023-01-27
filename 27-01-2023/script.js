import { GET, cardGenerator, qS, cE } from "./api.js";

const popularEl = qS(".popular");
const topRatedEl = qS(".top_rated");

GET("tv", "popular", "b85ba54d830b65579b6ef8d17fec2fd8").then((data) => {
  data.results.map((movie) => popularEl.appendChild(cardGenerator(movie)));
});

GET("tv", "top_rated", "b85ba54d830b65579b6ef8d17fec2fd8").then((data) => {
  data.results.map((movie) => topRatedEl.appendChild(cardGenerator(movie)));
});

// const inputEl = qS(".search");

// inputEl.addEventListener("change", () => {
//   GET("tv", "popular", "b85ba54d830b65579b6ef8d17fec2fd8").then((data) => {
//     const newData = data.results.filter((item) => item.title === inputEl.value);
//     newData.map((movie) => popularEl.appendChild(cardGenerator(movie)));
//     console.log(newData);
//   });
// });
