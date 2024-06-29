function getStudentGrade() {
    while (true) {
      const input = prompt("Enter student mark (between 0 and 100): ");
      if (input === null) {
        alert("Input cancelled.");
        return null; // EXTRA: Exit the function when Cancel is clicked
      }
      const mark = parseFloat(input);
      if (!isNaN(mark) && mark >= 0 && mark <= 100) {
        if (mark > 79) {
          return "A";
        } else if (mark >= 60 && mark <= 79) {
          return "B";
        } else if (mark >= 49 && mark <= 59) {
          return "C";
        } else if (mark >= 40 && mark <= 49) {
          return "D";
        } else {
          return "E";
        }
      } else {
        alert("Invalid input. Please enter a mark between 0 and 100.");
      }
    }
  }

  const grade = getStudentGrade();
  if (grade !== null) {
    alert(`Student grade: ${grade}`);
  }
