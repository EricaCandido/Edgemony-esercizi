import { funzionePost, deleteFunc } from "./metodiFetch.js";

const itemForm = document.querySelector(".item_form");
const inputTitle = document.querySelector(".titleInput");
const inputPrice = document.querySelector(".priceInput");
const inputCategory = document.querySelector(".categoryInput");
const inputDescription = document.querySelector(".descriptionInput");
const inputImage = document.querySelector(".item_imgInput");
const categoryForm = document.querySelector(".category_form");
const categoryName = document.querySelector(".category_name");
const categoryImage = document.querySelector(".category_image");
const deleteForm = document.querySelector(".delete_form");
const editForm = document.querySelector(".edit_form");

categoryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const catObj = {
    name: categoryName.value,
    image: categoryImage.value,
  };
  console.log(catObj);
  funzionePost(catObj, "/categories");
});

itemForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newObj = {
    title: inputTitle.value,
    price: parseInt(inputPrice.value),
    description: inputDescription.value,
    categoryId: parseInt(inputCategory.value),
    images: [inputImage.value],
  };
  funzionePost(newObj, "/products", "POST");
});

deleteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  deleteFunc("products", event.target[0].value);
});

editForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const editedObj = {
    id: event.target[0].value,
    title: event.target[1].value,
    price: event.target[2].value,
    categoryId: event.target[3].value,
    images: [event.target[4].value],
    description: event.target[5].value,
  };
  funzionePost(editedObj, `/products/${editedObj.id}`, "PUT");
});
