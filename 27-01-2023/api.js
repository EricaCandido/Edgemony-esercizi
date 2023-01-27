const API_KEY = "b85ba54d830b65579b6ef8d17fec2fd8";
const BASE_URL = "https://api.themoviedb.org/3/";

const qS = (element) => document.querySelector(element);
const cE = (element) => document.createElement(element);

const GET = async (endpoint, resource, api_key) => {
  const res = await fetch(
    `${BASE_URL}${endpoint}/${resource}?api_key=${api_key}`
  );
  const data = await res.json();
  return data;
};

const cardGenerator = (object) => {
  const wrapperEl = cE("div");
  const imgEl = cE("img");

  wrapperEl.className = "movie_wrapper";
  imgEl.className = "movie_img";

  imgEl.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w500${object.poster_path}`
  );
  imgEl.setAttribute("alt", object.title);

  wrapperEl.append(imgEl);

  return wrapperEl;
};

export { GET, cardGenerator, qS, cE };
