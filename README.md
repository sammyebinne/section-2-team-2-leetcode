# section-2-team-2-leetcode

Below are the pseudocode to the solutions for the leetcode challenges we're doing as a team exercise



1491. Average Salary Excluding the Minimum and Maximum Salary

-- Method A

Step 1 - Find the minimum and maximum

Step 2 -  Add the sum of all Salaries

Step 3 - Subtract the value of the minimum and the maximum elements from the sum

Step 4 - Return the solution from step 3 divided by array length-2

--  Method B

Step 1 - sort the array in ascending order

Step 2 - loop over the array to find the sum of its elements, ommitting the 0th and (n-1)th elements

Step 3 - We divide the sum by n-2 to get the average of all the elements, excluding the min and max


977. Squares of a Sorted Array


