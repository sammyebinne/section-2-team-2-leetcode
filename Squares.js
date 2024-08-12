/*
   Step 1 - Loop through the array of numbers, replacing them with their squares
   Step 2 - sort the elements of the array in ascending order and return it 
*/
const sortedSquares = (nums) => {
  // Loop through the array of numbers, replacing each element with their squares
  for (let i = 0; i < nums.length; i++) {
    nums[i] **= 2;
  }
  // sort the elements of the array in ascending order and return it
  return nums.sort((a, b) => a - b);
};
