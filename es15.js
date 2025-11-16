// Partendo dall’angolo in alto a sinistra di una griglia 2 × 2, e potendo muoversi solo verso destra e verso il basso,
// esistono esattamente 6 percorsi per arrivare all’angolo in basso a destra.

// Quanti percorsi di questo tipo esistono in una griglia 20 × 20?

const grid = 20;
const k = grid; // 20 right, 20 down
const n = grid * 2; // totale mosse 40

let num = 1;
let den = 1;

for (let i = 0; i < k; i++) {
  num *= n - i;
}

for (let i = 1; i <= k; i++) {
  den *= i;
}

let result = Math.floor(num / den);
console.log(result);
