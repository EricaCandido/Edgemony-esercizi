const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);

const timerEl = cE("div");
const stopBtnEl = cE("button");
const inputEl = cE("input");
const bodyEl = qS("body");

timerEl.className = "timer";
stopBtnEl.className = "stop_btn";
inputEl.className = "countfrom_input";
inputEl.setAttribute("placeholder", "Count from");

stopBtnEl.textContent = "Press to stop";
bodyEl.append(inputEl, timerEl, stopBtnEl);

inputEl.addEventListener("change", () => {
  let countFrom = inputEl.value;

  const countDown = setInterval(() => {
    if (countFrom == 0) {
      bodyEl.style.background =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      timerEl.textContent = "";
    } else {
      countFrom--;
      timerEl.textContent = countFrom;
    }
  }, 1000);

  stopBtnEl.addEventListener("click", () => clearInterval(countDown));
});
