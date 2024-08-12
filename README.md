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

   Step 1 - Loop through the array of numbers, replacing them with their squares
   Step 2 - sort the elements of the array in ascending order and return it 

268. Missing Number

    we'll apply Gauss's sum in this algorithm
    - Gauss's sum allows us to calculate the sum of consecutive numbers when we have a range 
    - (n(n+1)/2) where n is the upper limit and zero is the lower limit  

    Step 1 - find the actual sum of numbers in the array
    Step 2 - find the Gauss's sum of the numbers in the range given
    Step 3 - the missing number will be the difference between the Gauss's sum and the actual sum. Return this difference.

2. Add Two Numbers

    The two linked lists given are in reversed order 
    
    We have to add each of their nodes in order of appearance (from first to last)

    If the sum of any "set" is greater than 9, we have to carry over the first didgit, just like we would in regular mathematics

    If one of the LinkedLists is longer than the other one, we can just represent that node's value by zero
    

21. Merge Two Sorted Lists

    Step 1 - create a dummy node as the head of our result
    Step 2 - use a while loop to ensure that there is at least one node to work with
    Step 3 - use if statements to identify the smaller value in either node
    Step 4 - append the lesser value to the next node of the result linkedlist
    Step 5 - after exiting the while loop, check if there is a remaining unattended node and append to the result list