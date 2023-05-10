const input = "2\nHacker\nRank\nSpecial\nCharacters";

function processData(input) {
  //Enter your code here
  //split the input into an array of strings separated by a newline. Splice the first element from the array
  let words = input.split("\n").splice(1);

  // loop through each split string and print the even and odd letters separated by a space
  // outer for loop to loop through each string in the array
  for (let i = 0; i < words.length; i++) {
    let even = "";
    let odd = "";
    // innner for loop to loop through each letter of the string
    for (let j = 0; j < words[i].length; j++) {
      if (j % 2 === 0) {
        even += words[i][j];
      } else {
        odd += words[i][j];
      }
    }
    console.log(even + " " + odd);
  }
}

processData(input);
