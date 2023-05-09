function Person(initialAge) {
  // Add some more code to run some checks on initialAge
  let initialAge;
  let age;

  if (this.initialAge < 0) {
    initialAge = 0;
    age = initialAge;
    return console.log(
      `Age is not valid, setting age to ${initialAge}, "/n", You are young`
    );
  }
  initialAge = age;
  this.amIOld = function () {
    // Do some computations in here and print out the correct statement to the console
  };
  this.yearPasses = function () {
    // Increment the age of the person in here
  };
}
