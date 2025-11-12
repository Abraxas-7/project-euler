// 2520 è il più piccolo numero che può essere diviso per ciascuno dei numeri da 1 a 10 senza lasciare resto.

// Qual è il più piccolo numero positivo che sia divisibile esattamente (senza resto) per tutti i numeri da 1 a 20?

const max = 20;
let ris = 1;

for (let index = 2; index <= max; index++) {
  ris = MCM(ris, index);
}

console.log(ris);

function MCD(a, b) {
  c = a % b;

  while (c != 0) {
    a = b;
    b = c;
    c = a % b;
  }

  return b;
}

function MCM(a, b) {
  return (a * b) / MCD(a, b);
}
