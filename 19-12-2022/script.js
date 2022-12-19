/*Esercizio 1
let operationType = prompt("Che tipo di operazione vuoi effettuare?");
let firstInput = prompt("Digita pure il primo numero");
let secondInput = prompt("Digita pure il secondo numero");
let intFirst = parseInt(firstInput);
let intSecond = parseInt(secondInput);
if (
  operationType == "Addizione" ||
  operationType == "addizione" ||
  operationType == "+" ||
  operationType == "somma" ||
  operationType == "Somma"
) {
  alert("Ecco il risultato dell'operazione: " + (intFirst + intSecond));
}
if (
  operationType == "Sottrazione" ||
  operationType == "sottrazione" ||
  operationType == "-"
) {
  alert("Ecco il risultato dell'operazione: " + (intFirst - intSecond));
}
if (
  operationType == "Moltiplicazione" ||
  operationType == "moltiplicazione" ||
  operationType == "x" ||
  operationType == "*"
) {
  alert("Ecco il risultato dell'operazione: " + intFirst * intSecond);
}
if (
  operationType == "Divisione" ||
  operationType == "divisione" ||
  operationType == ":" ||
  operationType == "/"
) {
  alert("Ecco il risultato dell'operazione: " + firstInput / secondInput);
} else {
  alert("Mi dispiace, questa operazione non è ancora supportata.");
}*/

/* Avanzato con SWITCH
let operationType = prompt("Che tipo di operazione vuoi effettuare?");
let firstInput = prompt("Digita pure il primo numero");
let secondInput = prompt("Digita pure il secondo numero");
let intFirst = parseInt(firstInput);
let intSecond = parseInt(secondInput);
switch (operationType) {
  case "+":
    alert("Ecco il risultato dell'operazione: " + (intFirst + intSecond));
    break;
  case "addizione":
    alert("Ecco il risultato dell'operazione: " + (intFirst + intSecond));
    break;
  case "Addizione":
    alert("Ecco il risultato dell'operazione: " + (intFirst + intSecond));
    break;
  case "Somma":
    alert("Ecco il risultato dell'operazione: " + (intFirst + intSecond));
    break;
  case "somma":
    alert("Ecco il risultato dell'operazione: " + (intFirst + intSecond));
    break;
  case "-":
    alert("Ecco il risultato dell'operazione: " + (intFirst - intSecond));
    break;
  case "sottrazione":
    alert("Ecco il risultato dell'operazione: " + (intFirst - intSecond));
    break;
  case "Sottrazione":
    alert("Ecco il risultato dell'operazione: " + (intFirst - intSecond));
    break;
  case "*":
    alert("Ecco il risultato dell'operazione: " + intFirst * intSecond);
    break;
  case "x":
    alert("Ecco il risultato dell'operazione: " + intFirst * intSecond);
    break;
  case "moltiplicazione":
    alert("Ecco il risultato dell'operazione: " + intFirst * intSecond);
    break;
  case "Moltiplicazione":
    alert("Ecco il risultato dell'operazione: " + intFirst * intSecond);
    break;
  case "/":
    alert("Ecco il risultato dell'operazione: " + intFirst / intSecond);
    break;
  case ":":
    alert("Ecco il risultato dell'operazione: " + intFirst / intSecond);
    break;
  case "divisione":
    alert("Ecco il risultato dell'operazione: " + intFirst / intSecond);
    break;
  case "Divisione":
    alert("Ecco il risultato dell'operazione: " + intFirst / intSecond);
    break;
  default:
    alert("Mi dispiace, questa operazione non è ancora supportata.");
}*/
