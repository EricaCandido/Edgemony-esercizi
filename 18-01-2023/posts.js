const itemForm = document.querySelector(".item_form");
const inputTitle = document.querySelector(".titleInput");
const inputPrice = document.querySelector(".priceInput");
const inputCategory = document.querySelector(".categoryInput");
const inputDescription = document.querySelector(".descriptionInput");
const inputImage = document.querySelector(".item_imgInput");

itemForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newObj = {
    title: inputTitle.value,
    price: parseInt(inputPrice.value),
    description: inputDescription.value,
    categoryId: parseInt(inputCategory.value),
    images: [inputImage.value],
  };
  console.log(newObj); //Esercizio 1
  funzionePost(newObj);
});
const funzionePost = (objBody) => {
  fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objBody),
  })
    .then((res) => res.json())
    .then((data) => console.log("RISPOSTA POST: ", data))
    .catch((e) => console.log("ERRORE: ", e));
};
