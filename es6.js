// La somma dei quadrati dei primi dieci numeri naturali è:
// 1² + 2² + ... + 10² = 385.

// Il quadrato della somma dei primi dieci numeri naturali è:
// (1 + 2 + ... + 10)² = 55² = 3025.

// Quindi, la differenza tra la somma dei quadrati dei primi dieci numeri naturali e il quadrato della somma è 3025 - 385 = 2640.

// Trova la differenza tra la somma dei quadrati dei primi cento numeri naturali e il quadrato della somma.

const max = 100;

let sommaQuadrati = 0;
let quadratiSomma = 0;

for (let i = 1; i <= max; i++) {
  sommaQuadrati += i * i;
  quadratiSomma += i;
}

quadratiSomma *= quadratiSomma;

console.log(quadratiSomma - sommaQuadrati);
