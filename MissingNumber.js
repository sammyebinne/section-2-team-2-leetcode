/*
we'll apply Gauss's sum in this algorithm
- Gauss's sum allows us to calculate the sum of consecutive numbers when we have a range 
- (n(n+1)/2) where n is the upper limit and zero is the lower limit  

Step 1 - find the actual sum of numbers in the array
Step 2 - find the Gauss's sum of the numbers in the range given
Step 3 - the missing number will be the difference between the Gauss's sum and the actual sum. Return this difference.

*/

const missingNumber = (nums) => {
  // upper limit is the number elements in the array
  let limit = nums.length;

  // we use the array.reduce method to find the sum of the elements in the array
  let actualSum = nums.reduce((acc, curr) => acc + curr, 0);

  // using the formula for Gauss's sum
  let expectedSum = (limit * (limit + 1)) / 2;

  // return the difference
  return expectedSum - actualSum;
};
