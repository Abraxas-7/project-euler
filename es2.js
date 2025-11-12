// Ogni nuovo termine nella sequenza di Fibonacci è generato sommando i due termini precedenti.
// Partendo da 1 e 2, i primi 10 termini saranno:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, …

// Considerando i termini della sequenza di Fibonacci i cui valori non superano quattro milioni,
// trova la somma dei termini con valore pari.

const max = 4000000;

let tot = 0;

let fiba = 1;
let fibb = 2;
let temp = 0;

// for (let index = 1; temp < max; index++) {
//   temp = fibb + fiba;
//   fiba = fibb;
//   fibb = temp;

//   console.log(fiba, fibb);
// }

while (temp < max) {
  temp = fibb + fiba;
  fiba = fibb;
  fibb = temp;

  if (fiba % 2 === 0) {
    tot += fiba;
  }

  console.log(tot);
}
