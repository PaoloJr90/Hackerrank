// function using if-else statments
function getGrade(score) {
  let grade;
  // Write your code here
  if (score > 25 && score <= 30) {
    grade = "A";
  } else if (score > 20 && score <= 25) {
    grade = "B";
  } else if (score > 15 && score <= 20) {
    grade = "C";
  } else if (score > 10 && score <= 15) {
    grade = "D";
  } else if (score > 5 && score <= 10) {
    grade = "E";
  } else if (score >= 0 && score <= 5) {
    grade = "F";
  }
  //console.log(grade);
  return grade;
}
getGrade(28);

// function using switch-cases
function getGradeSwitch(score) {
  let grade;
  switch (
    true // the switch expression must match one of the booleans returned from the cases below
  ) {
    case score > 25 && score <= 30: // each case returns a boolean value
      grade = "A";
      break;
    case score > 15 && score <= 20:
      grade = "B";
      break;
    case score > 15 && score <= 20:
      grade = "C";
      break;
    case score > 10 && score <= 15:
      grade = "D";
      break;
    case score > 5 && score <= 10:
      grade = "E";
      break;
    case score >= 0 && score <= 5:
      grade = "F";
      break;
  }
  console.log(grade);
  return grade;
}
getGradeSwitch(15);
