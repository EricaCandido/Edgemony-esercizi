const itemForm = document.querySelector(".item_form");
const inputTitle = document.querySelector(".titleInput");
const inputPrice = document.querySelector(".priceInput");
const inputCategory = document.querySelector(".categoryInput");
const inputDescription = document.querySelector(".descriptionInput");
const inputImage = document.querySelector(".item_imgInput");
const categoryForm = document.querySelector(".category_form");
const categoryName = document.querySelector(".category_name");
const categoryImage = document.querySelector(".category_image");

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
  funzionePost(newObj, "/products");
});

const funzionePost = (objBody, p) => {
  fetch(`https://api.escuelajs.co/api/v1` + p, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objBody),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.statusCode >= 400 && data.statusCode < 500) {
        alert(`Attention, check your details.` + data.message[0]);
      } else {
        alert(`${p} details uploaded`);
        console.log(data);
      }
    })
    .catch((e) => console.log("ERRORE: ", e));
};
