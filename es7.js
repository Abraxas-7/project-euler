// Elencando i primi sei numeri primi: 2, 3, 5, 7, 11 e 13, possiamo vedere che il 6º numero primo è 13.

// Qual è il 10.001º numero primo?

const max = 10001;

let primi = [2];
let num = 3;

while (primi.length < max) {
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

console.log(primi[max - 1]);
