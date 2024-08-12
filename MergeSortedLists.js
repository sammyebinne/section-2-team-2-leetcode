/*
    Step 1 - create a dummy node as the head of our result
    Step 2 - use a while loop to ensure that there is at least one node to work with
    Step 3 - use if statements to identify the smaller value in either node
    Step 4 - append the lesser value to the next node of the result linkedlist
    Step 5 - after exiting the while loop, check if there is a remaining unattended node and append to the result list
 */

const mergeTwoLists = (l1, l2) => {
  // create a dummy node as the head of our result
  let dummy = new ListNode("head to be discarded");
  // assign the dummy head node to a variable called current
  let current = dummy;

  // loop through both linked lists while both of them have a node for comparison
  while (l1 && l2) {
    // check which node has the lesser value
    if (l1.val < l2.val) {
      // append that value to a new list node and make that the next node in our result node
      current.next = new ListNode(l1.val);
      // move long to the next node on l1
      l1 = l1.next;
    } else {
      // append that value to a new list node and make that the next node in our result node
      current.next = new ListNode(l2.val);
      // move long to the next node on l2
      l2 = l2.next;
    }
    // move along our result linked list
    current = current.next;
  }

  // assuming one of the linked lists still has one or more nodes left
  if (l1) current.next = l1;
  if (l2) current.next = l2;

  // discard our dummy head and return the rest of the result linked list
  return dummy.next;
};
