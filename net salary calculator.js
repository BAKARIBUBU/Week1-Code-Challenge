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

  function calculateNssfDeductions(grossSalary) {
    return grossSalary * 0.06;
  }

  // Example usage:
  const basicSalary = 50000;
  const benefits = 10000;
  const result = calculateNetSalary(basicSalary, benefits);
  console.log(`Gross Salary: ${result.grossSalary}`);
  console.log(`PAYE Tax: ${result.payeTax}`);
  console.log(`NHIF Deductions: ${result.nhifDeductions}`);
  console.log(`NSSF Deductions: ${result.nssfDeductions}`);
  console.log(`Net Salary: ${result.netSalary}`);
