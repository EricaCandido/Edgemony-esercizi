// ESERCIZIO 1 (parte 1): Sulla base della lezione del giorno, ricreare la calcolatrice fatta in passato utilizzando solo arrow functions.

// nb. ogni singola operazione sara una arrow function

const sum = (firstNum, secondNum) => firstNum + secondNum;
const difference = (firstNum, secondNum) => firstNum - secondNum;
const multipl = (firstNum, secondNum) => firstNum * secondNum;
const division = (firstNum, secondNum) => firstNum / secondNum;

console.log(sum(10, 2));
console.log(difference(10, 2));
console.log(multipl(10, 2));
console.log(division(10, 2));

// ESERCIZIO 1 (parte 2):
// Alla fine combinare le varie operazioni in una funzione piu ampia, dove all'utente viene data la
// possibilita di scegliere quale operazione effettuare. Siate liberi di aggiungere gli argomenti a
// piacere, come per esempio i numeri, se chiederli all'utente o meno.

function calculator(type, firstNum, secondNum) {
  switch (type) {
    case "+":
      return firstNum + secondNum;
      break;
    case "-":
      return firstNum - secondNum;
      break;

    case "*":
      return firstNum * secondNum;
      break;

    case "/":
      return firstNum / secondNum;
      break;
  }
}

console.log(calculator("+", 10, 2));
console.log(calculator("-", 10, 2));
console.log(calculator("*", 10, 2));
console.log(calculator("/", 10, 2));

// ESERCIZIO AVANZATO: Provare a completare l'esercizio sopra applicando qualche callback. Anche qui non
// importa l'impostazione, siate creativi, l'importante che si verifichi il caso di una callback.

//verificare che il type sia corretto
function calc2(type, firstNum, secondNum) {
  if (type == "+" || type == "-" || type == "*" || type == "/") {
    return calculator(type, firstNum, secondNum);
  } else {
    return "Mi dispiace, l'operazione non è supportata. Prova ad inserire '+' per ottenere la somma, '-' per ottenere la differenza,'*' per ottenere il prodotto oppure '/' per ottenere la divisione.";
  }
}

//verificare anche che le ultime due variabili siano numeri

function completeCalc(type, firstNum, secondNum) {
  if (isNaN(firstNum) == false && isNaN(secondNum) == false) {
    return calc2(type, firstNum, secondNum);
  } else {
    return "Sembra che tu non abbia inserito un numero. Riprova.";
  }
}

console.log(calc2("+", 10, 2));
console.log(calc2(":", 10, 2));
console.log(completeCalc("+", "s", 10));
console.log(completeCalc(":", 100, 10));
