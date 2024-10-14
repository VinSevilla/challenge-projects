# Queue, Stack, and Bag Resizing Implementation in Java

**OBJECTIVES:**  
To practice resizing arrays under the dynamic conditions of a running program.

- Implement the `resize()` method with the following header:
  
  ```java
  private void resize(int capacity)

# Queue Class
A queue follows the First In, First Out (FIFO) principle. The elements are enqueued at the end and dequeued from the front.

**Methods:**  
- enqueue(Item T): Adds an element to the end of the queue.
- dequeue(): Removes and returns the element from the front of the queue.
- isEmpty(): Checks if the queue is empty.
- size(): Returns the current number of elements in the queue.
- resize(int capacity): Resizes the underlying array when the queue becomes full or less utilized.
- iterator(): Provides an iterator to traverse the queue in a circular manner.

# Stack Class
A stack follows the Last In, First Out (LIFO) principle. Elements are added and removed from the top of the stack.

**Methods:**  
- push(Item T): Adds an element to the top of the stack.
- pop(): Removes and returns the most recently added element (from the top).
- isEmpty(): Checks if the stack is empty.
- size(): Returns the current number of elements in the stack.
- resize(int capacity): Resizes the internal array if the stack exceeds or falls below a certain size.
- iterator(): Provides an iterator that traverses the stack in reverse (LIFO) order.

# Bag Class
A bag is an unordered collection where elements can be added but not removed. It provides functionality to iterate over its items.

**Methods:**  
- add(Item T): Adds an element to the bag.
- isEmpty(): Checks if the bag is empty.
- size(): Returns the current number of elements in the bag.
- resize(int capacity): Resizes the array if the bag exceeds a certain size.
- iterator(): Provides an iterator to traverse the elements in the bag.

# Learning Outcome
This project provides a basic implementation of three core data structures: Queue, Stack, and Bag. It demonstrates 
how to manage memory dynamically through resizing arrays, based on the conditions of element additions or removals, 
and provides iterators to traverse the data structures. These resizable data structures are essential for managing 
space efficiently in dynamic environments.


