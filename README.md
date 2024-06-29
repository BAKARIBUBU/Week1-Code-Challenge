# Week1-Code-Challenge

CHALLENGE 1: # getStudentGrade Function

## Overview

The `getStudentGrade` function is a JavaScript function designed to prompt the user to input a student's mark and then return the corresponding grade based on the mark entered. The function continuously prompts the user until a valid mark (between 0 and 100) is entered.

## Features

- **Continuous Input Validation:** The function uses a `while (true)` loop to continuously prompt the user until a valid mark is provided.
- **Grading Scale:** The function returns grades based on the following scale:
  - A: Marks greater than 79
  - B: Marks between 60 and 79 (inclusive)
  - C: Marks between 49 and 59 (inclusive)
  - D: Marks between 40 and 49 (inclusive)
  - E: Marks less than 40
- **User-Friendly:** If an invalid input is entered, the function alerts the user and prompts them to enter the mark again.

## Usage

### Function Definition

```javascript

function getStudentGrade() {
  while (true) {
    const mark = parseFloat(prompt("Enter student mark (between 0 and 100): "));
    if (!isNaN(mark) && mark >= 0 && mark <= 100) {
      if (mark > 79) {
        return "A";
      } else if (mark >= 60 && mark <= 79) {
        return "B";
      } else if (mark >= 49 && mark <= 59) {
        return "C";
      } else if (mark >= 40 and mark <= 49) {
        return "D";
      } else {
        return "E";
      }
    } else {
      alert("Invalid input. Please enter a mark between 0 and 100.");
    }
  }
}
```

### Example Usage

To use the `getStudentGrade` function, simply call it and handle the returned grade:

```javascript
const grade = getStudentGrade();
alert(`Student grade: ${grade}`);
```

When the function is called:

1. It prompts the user to enter a mark.

2. If the entered mark is valid (a number between 0 and 100), it calculates and returns the corresponding grade.
3. If the entered mark is invalid, it alerts the user and prompts again.

## How It Works

1. **Prompting the User:** The function uses the `prompt` method to get input from the user.

2. **Validating the Input:** It checks if the input is a number and within the range of 0 to 100.
3. **Determining the Grade:** Based on the validated mark, it determines the grade using a series of `if` statements.
4. **Returning the Grade:** Once a valid mark is entered, the function returns the appropriate grade and exits.

## Dependencies

- **JavaScript Environment:** The function requires a JavaScript runtime environment that supports the `prompt` and `alert` methods, typically a web browser.

## Error Handling

- The function includes error handling to manage invalid inputs. If the input is not a number or is outside the range of 0 to 100, it alerts the user and prompts for the input again.

## Notes

- This function is intended for use in environments where `prompt` and `alert` are available (e.g., web browsers). For server-side JavaScript or environments without these methods, modifications would be necessary.

---

By following this guide, you should be able to implement and understand the `getStudentGrade` function effectively.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# CHALLENGE 2:# Speed Detector Function

## Overview

The `speedDetector` function is a JavaScript program that evaluates the speed of a car and determines if the driver should receive demerit points or have their license suspended based on the speed limit. If the car's speed is within the limit, the function prints and alerts "Ok". If the speed exceeds the limit, it calculates the number of demerit points and alerts the user accordingly. If the demerit points exceed a specified maximum, it alerts that the license is suspended.

## Features

- **Speed Limit Check:** The function checks if the speed of the car is below or above the speed limit.
- **Demerit Points Calculation:** For every 5 km/h over the speed limit, the function assigns one demerit point.
- **License Suspension:** If the demerit points exceed 12, the function notifies the user that their license is suspended.
- **User Alerts:** The function uses `alert` to notify the user of the result, providing immediate feedback in a web environment.

## Usage

### Function Definition

```javascript
function speedDetector(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  const maxDemeritPoints = 12;

  if (speed < speedLimit) {
    console.log("Ok");
    alert("Ok"); //EXTRA
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    if (demeritPoints > maxDemeritPoints) {
      console.log("License suspended");
      alert("License suspended"); //EXTRA
    } else {
      console.log(`Points: ${demeritPoints}`);
      alert(`Points: ${demeritPoints}`); //EXTRA
    }
  }
}

// Example usage
const speed = parseFloat(prompt("Enter the speed of the car: "));
speedDetector(speed);
```

### Example Usage

To use the `speedDetector` function, prompt the user to enter the speed of the car and pass this value to the function:

```javascript
const speed = parseFloat(prompt("Enter the speed of the car: "));
speedDetector(speed);
```

When the function is called:

1. It prompts the user to enter the speed of the car.
2. If the speed is less than the speed limit (70 km/h), it prints and alerts "Ok".
3. If the speed is above the speed limit, it calculates the number of demerit points.
4. If the demerit points exceed 12, it prints and alerts "License suspended".
5. If the demerit points are 12 or fewer, it prints and alerts the number of points.

### How It Works

1. **Constants Definition:**
   - `speedLimit`: The speed limit is set to 70 km/h.
   - `kmPerDemeritPoint`: Every 5 km/h above the speed limit earns 1 demerit point.
   - `maxDemeritPoints`: If the driver accumulates more than 12 demerit points, their license will be suspended.

2. **Speed Check:**
   - If the car's speed is less than the speed limit (`speedLimit`), it prints and alerts "Ok".
   - If the car's speed is above the speed limit, it calculates the number of demerit points.

3. **Calculating Demerit Points:**
   - The number of demerit points is calculated as the integer division of the difference between the car's speed and the speed limit by `kmPerDemeritPoint`.
   - If the demerit points exceed `maxDemeritPoints`, it prints and alerts "License suspended".
   - Otherwise, it prints and alerts the total number of demerit points.

### Dependencies

- **JavaScript Environment:** The function requires a JavaScript runtime environment that supports the `prompt`, `alert`, and `console.log` methods, typically a web browser.

### Error Handling

- The function includes basic error handling to ensure the input is a valid number.
- If the input is not a valid number, the behavior is undefined and the function may not work as expected. Additional input validation could be added to improve robustness.

### Notes

- This function is intended for use in environments where `prompt`, `alert`, and `console.log` are available (e.g., web browsers). For server-side JavaScript or environments without these methods, modifications would be necessary.
- The `alert` method provides immediate feedback to the user, making the function suitable for interactive web applications.

---

By following this guide, you should be able to implement and understand the `speedDetector` function effectively, including how it calculates demerit points and handles user alerts.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
CHALLENGE 3: # Net Salary Calculator

## Overview

The `calculateNetSalary` function is a JavaScript program designed to compute an employee's net salary by considering basic salary, benefits, and various deductions such as PAYE tax, NHIF, and NSSF. The function returns a detailed breakdown of the gross salary, PAYE tax, NHIF deductions, NSSF deductions, and the resulting net salary.

## Features

- **Gross Salary Calculation:** Computes the gross salary by adding basic salary and benefits.
- **PAYE Tax Calculation:** Uses a tiered system to calculate the PAYE tax based on the gross salary.
- **NHIF Deductions Calculation:** Calculates NHIF deductions based on the gross salary.
- **NSSF Deductions Calculation:** Calculates NSSF deductions as a fixed percentage of the gross salary.
- **Detailed Breakdown:** Returns an object containing the gross salary, PAYE tax, NHIF deductions, NSSF deductions, and net salary.

## Function Definitions

### calculateNetSalary

```javascript
function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  const payeTax = calculatePayeTax(grossSalary);
  const nhifDeductions = calculateNhifDeductions(grossSalary);
  const nssfDeductions = calculateNssfDeductions(grossSalary);
  const netSalary = grossSalary - payeTax - nhifDeductions - nssfDeductions;
  return {
    grossSalary,
    payeTax,
    nhifDeductions,
    nssfDeductions,
    netSalary
  };
}
```

### calculatePayeTax

```javascript
function calculatePayeTax(grossSalary) {
  if (grossSalary <= 12298) {
    return grossSalary * 0.1;
  } else if (grossSalary <= 23885) {
    return 1229.8 + (grossSalary - 12298) * 0.15;
  } else if (grossSalary <= 35472) {
    return 3583.75 + (grossSalary - 23885) * 0.2;
  } else if (grossSalary <= 47059) {
    return 6358.75 + (grossSalary - 35472) * 0.25;
  } else {
    return 10258.75 + (grossSalary - 47059) * 0.3;
  }
}
```

### calculateNhifDeductions

```javascript
function calculateNhifDeductions(grossSalary) {
  if (grossSalary <= 5999) {
    return 150;
  } else if (grossSalary <= 7999) {
    return 300;
  } else if (grossSalary <= 11999) {
    return 500;
  } else if (grossSalary <= 17999) {
    return 750;
  } else {
    return 1000;
  }
}
```

### calculateNssfDeductions

```javascript
function calculateNssfDeductions(grossSalary) {
  return grossSalary * 0.06;
}
```

### Example Usage

To use the `calculateNetSalary` function, provide the basic salary and benefits, and call the function to get the detailed salary breakdown:

```javascript
const basicSalary = 50000;
const benefits = 10000;
const result = calculateNetSalary(basicSalary, benefits);

console.log(`Gross Salary: ${result.grossSalary}`);
console.log(`PAYE Tax: ${result.payeTax}`);
console.log(`NHIF Deductions: ${result.nhifDeductions}`);
console.log(`NSSF Deductions: ${result.nssfDeductions}`);
console.log(`Net Salary: ${result.netSalary}`);
```

When the function is called:

1. It calculates the gross salary by adding basic salary and benefits.
2. It calculates the PAYE tax using a tiered system based on the gross salary.
3. It calculates NHIF deductions based on the gross salary.
4. It calculates NSSF deductions as 6% of the gross salary.
5. It calculates the net salary by subtracting the PAYE tax, NHIF deductions, and NSSF deductions from the gross salary.
6. It returns an object containing the detailed salary breakdown.

### Notes

- This function is designed for environments where JavaScript is supported, such as web browsers or Node.js.
- The PAYE tax calculation follows a specific tiered system. Ensure that these tiers match the current tax regulations.
- The NHIF and NSSF deductions are based on the provided gross salary ranges and percentages. Adjust these values if the deduction rates change.

By following this guide, you can implement and use the `calculateNetSalary` function effectively to compute net salaries with detailed deductions breakdowns.