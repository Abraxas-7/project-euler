// Se elenchiamo tutti i numeri naturali inferiori a 10 che sono multipli di 3 o di 5, otteniamo 3, 5, 6 e 9.
// La somma di questi multipli è 23.

// Trova la somma di tutti i multipli di 3 o di 5 inferiori a 1000.

const max = 1000;
let tot = 0;

for (let index = 0; index < max; index++) {
  if (index % 3 == 0 || index % 5 == 0) {
    tot += index;
    console.log(index);
  }
}

console.log(tot);
