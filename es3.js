// I fattori primi di 13195 sono 5, 7, 13 e 29.

// Qual è il più grande fattore primo del numero 600851475143?

let n = 600851475143n;
let fattore = 2n;

while (fattore * fattore <= n) {
  if (n % fattore === 0n) {
    n = n / fattore;
  } else {
    fattore += 1n;
  }
}

console.log(n);
