// Declare second integer, double, and String variables.
const integer = i + parseInt(input_stdin_array[input_currentline++]);
const float = (d + parseFloat(input_stdin_array[input_currentline++])).toFixed(
  1
);
const string = s + input_stdin_array[input_currentline++];
// Read and save an integer, double, and String to your variables.

// Print the sum of both integer variables on a new line.
console.log(integer);

// Print the sum of the double variables on a new line.
console.log(float);

// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
console.log(string);
