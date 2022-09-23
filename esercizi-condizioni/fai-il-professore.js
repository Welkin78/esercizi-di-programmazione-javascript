/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/
let voto = prompt('che voto hai preso?', '');

if (voto < 18) {
  alert('INSUFFICIENTE');
} else if ( voto<21) {
  alert('SUFFICIENTE');
} else if (voto < 24) {
  alert ('BUONO');
} else if (voto < 27) {
  alert ('DISTINTO');
} else if (voto < 30) {
  alert ('OTTIMO');
} else if (voto = 30) {
  alert ('ECCELLENTE');
}
  else {
  alert('VOTO NON AMMISSIBILE');
}{

}
