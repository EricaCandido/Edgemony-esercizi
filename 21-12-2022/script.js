/*ESERCIZIO 1

function sameStr() {
  let str = prompt("Inserisci la tua stringa");
  return str + " bootcamp";
}
console.log(sameStr());

*/

/*ESERCIZIO 2 scrivere un oggetto col vostro nome che vi identifichi in proprietà 
(nome, cognome, ecc...) e per metodi (es. possono anche essere semplici 
    console.log di voi che eseguite un hobby)

const myObject = {
  name: "Erica",
  surname: "Candido",
  isMale: false,
  age: 25,
  height: 1.6,

  idealWeight: function () {
    if (this.isMale === true) {
      return this.height * this.height * 22.1;
    }
    if (this.isMale === false) {
      return this.height * this.height * 20.6;
    }
  },
};
console.log(myObject);*/

/*AVANZATO punto uno

function calculator(operation, num1, num2) {
  if (operation === "+") {
    return num1 + num2;
  }
  if (operation === "-") {
    return num1 - num2;
  }
  if (operation === "*" || operation === "x") {
    return num1 * num2;
  }
  if (operation === ":" || operation === "/") {
    return num1 / num2;
  }
}

console.log(calculator("+", 10, 5));
console.log(calculator("-", 10, 5));
console.log(calculator("*", 10, 5));
console.log(calculator("x", 10, 5));
console.log(calculator(":", 10, 5));
console.log(calculator("/", 10, 5));
*/

/*AVANZATO punto due

function calculator(operation, numbers) {
  if (operation === "+") {
    return numbers[0] + numbers[1];
  }
  if (operation === "-") {
    return numbers[0] - numbers[1];
  }
  if (operation === "*" || operation === "x") {
    return numbers[0] * numbers[1];
  }
  if (operation === ":" || operation === "/") {
    return numbers[0] / numbers[1];
  }
}

console.log(calculator("+", [10, 5]));
console.log(calculator("-", [10, 5]));
console.log(calculator("*", [10, 5]));
console.log(calculator("x", [10, 5]));
console.log(calculator(":", [10, 5]));
console.log(calculator("/", [10, 5]));*/
