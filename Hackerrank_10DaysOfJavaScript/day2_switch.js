let s = "zwxya";

function getLetter(s) {
  let letter;
  const firstSet = ["a", "e", "i", "o", "u"];
  const secondSet = ["b", "c", "d", "f", "g"];
  const thirdSet = ["h", "j", "k", "l", "m"];
  const fourthSet = ["n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  // Write your code here
  switch (true) {
    case firstSet.includes(s.charAt(0)):
      letter = "A";
      break;
    case secondSet.includes(s.charAt(0)):
      letter = "B";
      break;
    case thirdSet.includes(s.charAt(0)):
      letter = "C";
      break;
    case fourthSet.includes(s.charAt(0)):
      letter = "D";
      break;
  }

  return letter;
}

console.log(getLetter(s));
