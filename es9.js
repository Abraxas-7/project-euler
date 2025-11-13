// Una terna pitagorica è un insieme di tre numeri naturali, a < b < c, per cui
// a² + b² = c².

// Per esempio, 3² + 4² = 9 + 16 = 25 = 5².

// Esiste esattamente una terna pitagorica per cui a + b + c = 1000.
// Trova il prodotto abc.

const target = 1000;

for (let a = 1; a < target; a++) {
  for (let b = a + 1; b < target; b++) {
    for (let c = b + 1; c < target; c++) {
      if (a + b + c === target && a * a + b * b === c * c) {
        console.log(a, b, c);
        console.log(a * b * c);
      }
    }
  }
}
