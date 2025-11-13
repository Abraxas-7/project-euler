// La somma dei numeri primi inferiori a 10 è 2 + 3 + 5 + 7 = 17.

// Trova la somma di tutti i numeri primi inferiori a due milioni.

const max = 2000000;

let primi = [2];
let num = 3;

while (num < max) {
  let limite = Math.sqrt(num);
  let flag = true;

  for (let i = 0; i <= limite; i++) {
    if (num % primi[i] === 0) {
      flag = false;
      break;
    }
  }

  if (flag) {
    primi.push(num);
  }

  num++;
}

let tot = 0;

for (let i = 0; i < primi.length; i++) {
  tot += primi[i];
}

console.log(tot);
