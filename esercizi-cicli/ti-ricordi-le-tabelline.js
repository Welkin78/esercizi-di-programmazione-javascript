/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/


let tabellina = prompt ('inserisci un numero per visualizzare la sua tabellina:', '');

let i=1;

for (let i = 1; i < 25; i++) {
total=i*tabellina
alert (total);
}
