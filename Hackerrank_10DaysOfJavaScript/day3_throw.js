/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */

function isPositive(a) {
  switch (true) {
    case a > 0:
      return "YES";
    case a < 0:
      throw Error("Negative Error");
    case a === 0:
      throw Error("Zero Error");
  }
}

let a = -2;

isPositive(a);
