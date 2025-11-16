// La seguente sequenza iterativa è definita per l’insieme dei numeri interi positivi:

// - n → n/2 (se n è pari)
// - n → 3n + 1 (se n è dispari)

// Usando la regola sopra e partendo da 13, otteniamo la seguente sequenza:
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1.

// Si può vedere che questa sequenza (che parte da 13 e termina a 1) contiene 10 termini.
// Anche se non è ancora stato dimostrato (Problema di Collatz), si pensa che tutti i numeri di partenza finiscano a 1.

// Quale numero di partenza, minore di un milione, produce la catena più lunga?

// NOTA: una volta iniziata la catena, i termini possono superare il milione.

const num = 1000000;

let memo = { 1: 1 };
let maxKey = null;
let maxValue = 0;

for (let i = 1; i < num; i++) {
  Collatz(i);
}

for (let key in memo) {
  if (memo[key] > maxValue) {
    maxValue = memo[key];
    maxKey = key;
  }
}
// console.log(memo);
console.log(maxKey, maxValue);

function Collatz(start) {
  // Se l'abbiamo già calcolato, non rifacciamo il lavoro
  if (start in memo) {
    return;
  }

  let n = start;
  let visited = [];

  // 1) Costruisco la catena finché non arrivo a un numero noto
  while (!(n in memo)) {
    visited.push(n);

    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
  }

  // Ora: n è un numero di cui conosciamo già la lunghezza
  // length = lunghezza catena che parte da n
  let length = memo[n];

  // 2) Risalgo la catena al contrario e assegno le lunghezze
  for (let i = visited.length - 1; i >= 0; i--) {
    length++; // ogni passo indietro = un termine in più
    memo[visited[i]] = length; // salvo la lunghezza per quel numero
  }
}
