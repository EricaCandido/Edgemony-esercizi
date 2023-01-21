export const funzionePost = (objBody, p, method) => {
  fetch(`https://api.escuelajs.co/api/v1` + p, {
    method: method,
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

export const deleteFunc = (type, id) => {
  fetch("https://api.escuelajs.co/api/v1/" + type + "/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data !== true) {
        alert(`${type} Not deleted because of: ` + data.name);
      } else {
        alert(`${type} Deleted succesfully!`);
      }
    })
    .catch((e) => console.log("ERRORE: ", e));
};
