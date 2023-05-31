/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
let s = Number(1234);
function reverseString(s) {
  try {
    const stringReversed = s.split("").reverse().join("");
    console.log(stringReversed);
  } catch (error) {
    console.log(error.message);
    console.log(s);
  }
}

reverseString(s);
