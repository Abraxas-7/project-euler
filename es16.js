// 2^15 = 32768 e la somma delle sue cifre è 3 + 2 + 7 + 6 + 8 = 26.

// Qual è la somma delle cifre del numero 2^1000?

const max = 1000;
let exp = 2n;
let sum = 0;

for (let i = 1; i < max; i++) {
  exp *= 2n;
}
let expString = exp.toString();

for (let i = 0; i < expString.length; i++) {
  sum += Number(expString[i]);
}

console.log(sum);
