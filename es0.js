// Un numero è un quadrato perfetto, o numero quadrato, se è il quadrato di un numero intero positivo.
// Per esempio, 25 è un numero quadrato perché 5² = 5 × 5 = 25; è anche un quadrato dispari.

// I primi 5 numeri quadrati sono: 1, 4, 9, 16, 25, e la somma dei quadrati dispari è 1 + 9 + 25 = 35.

// Tra i primi 720 mila numeri quadrati, qual è la somma di tutti i quadrati dispari?

const max = 720000;
let tot = 0n;

for (let index = 1n; index <= max; index++) {
  if (index % 2n !== 0n) {
    tot = tot + index * index;
    // console.log(index);
  }
}

console.log(tot);
