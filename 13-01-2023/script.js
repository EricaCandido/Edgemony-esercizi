const buttonEl1 = document.querySelector(".btn1");
const buttonEl2 = document.querySelector(".btn2");
const buttonEl3 = document.querySelector(".btn3");
const sliderImgEl = document.querySelector(".slider_img");

buttonEl1.addEventListener("click", () => {
  sliderImgEl.setAttribute("src", "./img/costanza.jpeg");
  buttonEl1.style.background = "#c7b198";
  buttonEl2.style.background = "#f0ece2";
  buttonEl3.style.background = "#f0ece2";
});

buttonEl2.addEventListener("click", () => {
  sliderImgEl.setAttribute("src", "./img/caffe.jpeg");
  buttonEl1.style.background = "#f0ece2";
  buttonEl2.style.background = "#c7b198";
  buttonEl3.style.background = "#f0ece2";
});

buttonEl3.addEventListener("click", () => {
  sliderImgEl.setAttribute("src", "./img/passione.jpeg");
  buttonEl1.style.background = "#f0ece2";
  buttonEl2.style.background = "#f0ece2";
  buttonEl3.style.background = "#c7b198";
});
