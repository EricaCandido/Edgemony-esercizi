const bodyEl = document.body;
const heroEl = document.createElement("div");
const hero_img = document.createElement("img");
const titleEl = document.createElement("h2");
const descripEl = document.createElement("p");

heroEl.className = "hero_class";
hero_img.className = "hero_img";
hero_img.src = "https://picsum.photos/600/400";
titleEl.className = "hero_title";
titleEl.textContent = "Benvenuti nel nostro sito ufficiale!";
descripEl.className = "hero_descrip";
descripEl.textContent =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro eum vero voluptatem magnam repudiandae officiis deserunt ratione accusamus? Atque minus, quia officia autem laborum ipsum repellat ex fuga, quasi nesciunt dignissimos porro vero molestias molestiae vitae qui unde, eveniet perspiciatis.";

bodyEl.appendChild(heroEl);
heroEl.appendChild(hero_img);
heroEl.appendChild(titleEl);
heroEl.appendChild(descripEl);
