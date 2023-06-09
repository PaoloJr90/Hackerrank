/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
let s = "javascriptloops";
function vowelsAndConsonants(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "x",
    "y",
    "z",
  ];

  // using regular for loop
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (vowels.includes(char)) {
      console.log(char);
    }
  }

  // using for-of loop
  for (let char of s) {
    if (!vowels.includes(char)) {
      console.log(char);
    }
  }
}

vowelsAndConsonants(s);
