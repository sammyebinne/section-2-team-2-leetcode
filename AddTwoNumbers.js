/*
   The two linked lists given are in reversed order 

   We have to add each of their nodes in order of appearance (from first to last)

   If the sum of any "set" is greater than 9, we have to carry over the first didgit, just like we would in regular mathematics

   If one of the LinkedLists is longer than the other one, we can just represent that node's value by zero
*/

const addTwoNumbers = (l1, l2) => {
  // assign a dummy node as the head node of our result
  let dummyHead = new ListNode("head");
  // assign that head to a variable called current
  let current = dummyHead;
  // initialize the "reusable" remainder to zero
  let remainder = 0;

  // use a while loop to check that at least one of the linkedlists still has a node
  while (l1 != null || l2 != null) {
    // check for the value of each node and assign null if not present
    val1 = l1 == null ? 0 : l1.val;
    val2 = l2 == null ? 0 : l2.val;
    // we add the values and the remainder
    let sum = val1 + val2 + remainder;

    // calculate the remainder by dividing the sum by 10 and eliminating the decimal
    remainder = Math.floor(sum / 10);

    // for the sum that will be recorded in the result node, take the modulus of the sum divided by 10
    let currentVal = sum % 10;
    // we then create a new node with the answer we derived earlier
    current.next = new ListNode(currentVal);

    // move the pointer along to the next node of the result linked list
    current = current.next;

    // we want to then check if there is a next node for each input linkedlist and point to the next node if present
    if (l1 != null) l1 = l1.next;
    if (l2 != null) l2 = l2.next;
  }
  // if there is a remainder from the addition of the final nodes, we create a new node witb that value
  if (remainder > 0) current.next = new ListNode(remainder);

  // we get rid of our dummy head and return the linkedlist as our result
  return dummyHead.next;
};