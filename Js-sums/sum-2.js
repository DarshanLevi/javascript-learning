// Create a program that checks whether a student's grade corresponds to "A", "B", "C", "D", or "F".

function checkGrade(score) {
  if (score >= 90) {
      return "Grade: A";
  } else if (score >= 80) {
      return "Grade: B";
  } else if (score >= 70) {
      return "Grade: C";
  } else if (score >= 60) {
      return "Grade: D";
  } else {
      return "Grade: F";
  }
}
console.log(checkGrade(75))