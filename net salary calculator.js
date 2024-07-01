function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  const payeTax = calculatePayeTax(grossSalary);
  const nhifDeductions = calculateNhifDeductions(grossSalary);
  const nssfDeductions = calculateNssfDeductions(grossSalary);
  const housingLevy = calculateHousingLevy(grossSalary);
  const netSalary = grossSalary - payeTax - nhifDeductions - nssfDeductions - housingLevy;
  return {
    grossSalary,
    payeTax,
    nhifDeductions,
    nssfDeductions,
    housingLevy,
    netSalary
  };
}

function calculatePayeTax(grossSalary) {
  if (grossSalary <= 24000) {
    return grossSalary * 0.1;
  } else if (grossSalary <= 32333) {
    return 2400 + (grossSalary - 24000) * 0.25;
  } else if (grossSalary <= 500000) {
    return 8400 + (grossSalary - 32333) * 0.3;
  } else if (grossSalary <= 800000) {
    return 16400 + (grossSalary - 500000) * 0.325;
  } else {
    return 24400 + (grossSalary - 800000) * 0.35;
  }
}

function calculateNhifDeductions(grossSalary) {
  if (grossSalary <= 5999) {
    return 150;
  } else if (grossSalary <= 7999) {
    return 300;
  } else if (grossSalary <= 11999) {
    return 400;
  } else if (grossSalary <= 14999) {
    return 500;
  } else if (grossSalary <= 19999) {
    return 600;
  } else if (grossSalary <= 24999) {
    return 750;
  } else if (grossSalary <= 29999) {
    return 850;
  } else if (grossSalary <= 34999) {
    return 900;
  } else if (grossSalary <= 39999) {
    return 950;
  } else if (grossSalary <= 44999) {
    return 1000;
  } else if (grossSalary <= 49999) {
    return 1100;
  } else if (grossSalary <= 59999) {
    return 1200;
  } else if (grossSalary <= 69999) {
    return 1300;
  } else if (grossSalary <= 79999) {
    return 1400;
  } else if (grossSalary <= 89999) {
    return 1500;
  } else if (grossSalary <= 99999) {
    return 1600;
  } else {
    return 1700;
  }
}

function calculateNssfDeductions(grossSalary) {
  return grossSalary * 0.06;
}

function calculateHousingLevy(grossSalary) {
  return grossSalary * 0.015;
}

// Example usage:
const basicSalary = 50000;
const benefits = 10000;
const result = calculateNetSalary(basicSalary, benefits);
console.log(`Gross Salary: ${result.grossSalary}`);
console.log(`PAYE Tax: ${result.payeTax}`);
console.log(`NHIF Deductions: ${result.nhifDeductions}`);
console.log(`NSSF Deductions: ${result.nssfDeductions}`);
console.log(`Housing Levy: ${result.housingLevy}`);
console.log(`Net Salary: ${result.netSalary}`);