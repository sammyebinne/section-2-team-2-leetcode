/*

Step 1 - Find the minimum and maximum

Step 2 -  Add the sum of all Salaries

Step 3 - Subtract the value of the minimum and the maximum elements from the sum

Step 4 - Return the solution from step 3 divided by array length-2

*/

const average = (salary) => {
  //Find the minimum and maximum
  let minSalary = Math.min(...salary);
  let maxSalary = Math.max(...salary);

  // Add the sum of all Salary
  let sumOfSalaries = salary.reduce((acc, curr) => acc + curr, 0);

  // Subtract the value of the minimum and the maximum elements from the sum
  let neededSum = sumOfSalaries - (maxSalary + minSalary);

  // Return the solution from step 3 divided by array length-2
  return neededSum / (salary.length - 2);
};