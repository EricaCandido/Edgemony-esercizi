import { getRandomInt } from "./utils.js";

export const BASE_URL = "https://dummyjson.com/";

//ESERCIZIO 1

// export const GET = async (endpoint) => {
//   const res = await fetch(BASE_URL + endpoint);
//   const data = await res.json();
//   return data;
// };

//ESERCIZIO 2
export const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint + `${getRandomInt(1, 101)}`);
  const data = await res.json();
  return data;
};
