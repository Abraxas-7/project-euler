// Un numero palindromo si legge allo stesso modo in entrambi i sensi.
// Il più grande palindromo ottenuto dal prodotto di due numeri di 2 cifre è 9009 = 91 × 99.

// Trova il più grande palindromo ottenuto dal prodotto di due numeri di 3 cifre.

let num = 1000;

let poli = 0;
let bigpoli = 0;

for (let i = num; i > 100; i--) {
  for (let j = i; j > 100; j--) {
    if (
      (bigpoli != 0 && bigpoli > i * j) ||
      (bigpoli != 0 && bigpoli > i * i)
    ) {
      break;
    }

    if (isPal(i * j) && i * j > bigpoli) {
      bigpoli = i * j;
    }
  }
}

function isPal(numero) {
  let str = numero.toString();
  let strlenght = str.length - 1;
  for (let index = 0; index < str.length / 2; index++) {
    if (str[index] != str[strlenght]) {
      return false;
    }
    strlenght--;
  }
  return true;
}

console.log(bigpoli);
