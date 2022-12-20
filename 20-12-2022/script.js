/*ESERCIZIO 1
Sulla base della lezione del giorno, scrivere un array inizialmente vuoto, e aggiungere al suo interno dieci elementi di tipo string a scelta, rispettando i seguenti punti:

utilizzare il ciclo for classico

sarà l'utente ad inserire queste stringhe (prompt)

alla fine, quando l'utente avrà inserito tutte e 10 le parole, stamparle in console*/


for (let i = 1; i < 11; i++) {
  console.log(prompt("Inserisci l'elemento n° " + i));
}*/

/*AVANZATO versione minimal con for in


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i of arr) {
  console.log(prompt("Inserisci l'elemento n° " + i));
}*/

/*AVANZATO versione minimal con for of

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i in arr) {
  console.log(prompt("Inserisci l'elemento n° " + (1 + parseInt(i))));
}*/
