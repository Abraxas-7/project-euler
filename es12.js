// La sequenza dei numeri triangolari è generata sommando i numeri naturali. Quindi il 7º numero triangolare è
// 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. I primi dieci termini sono:
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, …

// Elenchiamo i fattori dei primi sette numeri triangolari:

// 1  : 1
// 3  : 1, 3
// 6  : 1, 2, 3, 6
// 10 : 1, 2, 5, 10
// 15 : 1, 3, 5, 15
// 21 : 1, 3, 7, 21
// 28 : 1, 2, 4, 7, 14, 28

// Vediamo che 28 è il primo numero triangolare ad avere più di cinque divisori.

// Qual è il valore del primo numero triangolare ad avere più di cinquecento divisori?

//TROPPO LENTO
const max = 500;
let counter = 0;
// let tot = 0;
// let totSqrd = 0;

// for (let i = 1; counter < 500; i++) {
//   counter = 0;
//   tot += i;
//   totSqrd = Math.sqrt(tot);
//   for (let j = 1; j <= totSqrd; j++) {
//     if (tot % j === 0) {
//       if (j * j === tot) {
//         counter++;
//       } else {
//         counter += 2;
//       }
//     }
//   }
// }

// T(n) = n * (n + 1) / 2

let t = 0;
let a = 0;
let b = 0;

for (let i = 1; counter < max; i++) {
  if (i % 2 === 0) {
    a = i / 2;
    b = i + 1;
  } else {
    a = i;
    b = (i + 1) / 2;
  }
  t = a * b;

  counter = countDiv(a) * countDiv(b);
}

console.log(t);

function countDiv(num) {
  let divCounter = 0;
  let numSqrd = Math.sqrt(num);
  for (let i = 1; i <= numSqrd; i++) {
    if (num % i === 0) {
      if (i * i === num) {
        divCounter++;
      } else {
        divCounter += 2;
      }
    }
  }
  return divCounter;
}
