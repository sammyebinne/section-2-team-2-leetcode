/*

Step 1 - sort the array in ascending order

Step 2 - loop over the array to find the sum of its elements, ommitting the 0th and (n-1)th elements

Step 3 - We divide the sum by n-2 to get the average of all the elements, excluding the min and max

*/

const average = (salary) => {
  // first we sort the array using the array.sort method
  let sortedSalaries = salary.sort((a, b) => a - b);

  // we initialize an accumulator for our sum
  let sum = 0;

  // we use a for loop to loop from the second to the penultimate element
  for (let i = 1; i < sortedSalaries.length - 1; i++) {
    // add each element to our accummulator
    sum += sortedSalaries[i];
  }

  // to find the average, divide the sum by the length of the array minus the max and min elements
  return sum / (sortedSalaries.length - 2);
};