var romanToInt = function (s) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let element of s) {
    sum += roman[element];
  }
  if (s.includes("IV") || s.includes("IX")) {
    sum -= 2;
  }
  if (s.includes("XL") || s.includes("XC")) {
    sum -= 20;
  }
  if (s.includes("CD") || s.includes("CM")) {
    sum -= 200;
  }
  return sum;
};

const s = "MCMXCIV"; // 1994

console.log(romanToInt(s));

// for (let element in s) {
//   console.log(element);
// }

// for (let element of s) {
//   console.log(element);
// }
