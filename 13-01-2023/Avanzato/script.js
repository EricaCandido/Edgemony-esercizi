const bodyEl = document.querySelector("body");
const sliderEl = document.createElement("div");

const sliderImgEl = document.createElement("img");
const sliderSwitchEL = document.createElement("div");
const buttonEl1 = document.createElement("button");
const buttonEl2 = document.createElement("button");
const buttonEl3 = document.createElement("button");

sliderEl.className = "slider";
sliderImgEl.className = "slider_img";
sliderImgEl.setAttribute("src", "./img/costanza.jpeg");
sliderSwitchEL.className = "slider_switch";
buttonEl1.className = "btn1";
buttonEl2.className = "btn2";
buttonEl3.className = "btn3";

bodyEl.appendChild(sliderEl);
sliderEl.append(sliderImgEl, sliderSwitchEL);
sliderSwitchEL.append(buttonEl1, buttonEl2, buttonEl3);

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
