// Se i numeri da 1 a 5 vengono scritti in lettere: one, two, three, four, five,
// allora il numero totale di lettere usate è 3 + 3 + 5 + 4 + 4 = 19.

// Se tutti i numeri da 1 a 1000 (one thousand) inclusi venissero scritti in lettere, quante lettere verrebbero usate?

// NOTA: Non contare spazi o trattini. Per esempio, 342 (three hundred and forty-two) contiene 23 lettere e 115
// (one hundred and fifteen) contiene 20 lettere. L’uso di "and" nello scrivere i numeri è conforme all’uso britannico.

const ONES = [
  "", // 0 (vuoto perché non serve)
  "one", // 1
  "two", // 2
  "three", // 3
  "four", // 4
  "five", // 5
  "six", // 6
  "seven", // 7
  "eight", // 8
  "nine", // 9
  "ten", // 10
  "eleven", // 11
  "twelve", // 12
  "thirteen", // 13
  "fourteen", // 14
  "fifteen", // 15
  "sixteen", // 16
  "seventeen", // 17
  "eighteen", // 18
  "nineteen", // 19
];

const TENS = [
  "", // 0
  "", // 1 (non esiste "ten" qui)
  "twenty", // 2
  "thirty", // 3
  "forty", // 4
  "fifty", // 5
  "sixty", // 6
  "seventy", // 7
  "eighty", // 8
  "ninety", // 9
];

const HUNDRED = "hundred";
const AND = "and";

let tot = 0;

for (let i = 0; i <= 1000; i++) {
  tot += numberToWords(i).length;
}

// console.log(numberToWords(115));
console.log(tot);

function numberToWords(num) {
  let value = 0;

  if (num <= 19) {
    value = Ones(num);
  } else if (num <= 99) {
    value = Tens(num);
  } else if (num <= 999) {
    value = Hundred(num);
  } else {
    value = Thousand();
  }

  return value;
}

function Ones(num) {
  let word = "";

  word = ONES[num];

  return word;
}

function Tens(num) {
  let word = "";

  let tens = Math.floor(num / 10);
  let ones = Ones(num % 10);

  word = TENS[tens] + ones;

  return word;
}

function Hundred(num) {
  let word = "";

  let hundred = Math.floor(num / 100);
  let rest = num % 100;

  if (rest === 0) {
    return ONES[hundred] + HUNDRED;
  }

  word = ONES[hundred] + HUNDRED + AND;

  if (rest <= 19) {
    word += ONES[rest];
  } else {
    word += Tens(rest);
  }

  return word;
}

function Thousand() {
  let word = "onethousand";

  return word;
}
