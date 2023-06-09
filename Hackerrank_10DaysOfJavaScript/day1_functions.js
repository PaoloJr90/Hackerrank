// create a function that takes in a number and returns the factorial of that number using recursion
function factorial(n) {
  if (n > 1) {
    console.log("Factorial using recursion =", n * factorial(n - 1));
    return n * factorial(n - 1); // recursive call
  }
  //console.log("Factorial using recursion =", n * factorial(n - 1));
  return 1; // base case
}
factorial(4);

// create a function that takes in a number and returns the factorial of that number using a for loop
function factorialForLoop(n) {
  if (n === 0 || n === 1) {
    return 1; // return 1 if the number is 0 or 1
  }
  // for loop to iterate through each number from n to 1
  // decrementing by 1 each time
  // i = n - 1 because we don't want to multiply n by itself
  // we want to multiply n by the previous number, so we start at n - 1
  // i >= 1 because we want to multiply n by 1 at the end
  for (let i = n - 1; i >= 1; i--) {
    n *= i; // multiply each number by the previous number
  }
  //console.log("Factorial using for loop =", n);
  return n; // return the factorial of the provided number
}
factorialForLoop(4);
