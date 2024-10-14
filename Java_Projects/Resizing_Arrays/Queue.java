import java.util.Iterator;
import java.util.NoSuchElementException;
public class Queue<Item> implements Iterable<Item> 
{
	public static final int INIT_CAPACITY = 8;
	private Item[] a;  // Array of generics 
	private int n;     // Size of the Queue
	private int first; // First element of the Queue
	private int last;  // Last Element of the Queue
	
	public Queue() //Constructor
	{
		a = (Item[]) new Object[INIT_CAPACITY];
		n = 0;
		first = 0; // In an empty Queue, the first and last elements
		last = 0;  // are the same
	}
    public boolean isEmpty()
    {
	   return n == 0;  //True if the Queue is empty
    }
    public int size()
    {
	   return n;  // returns the size of the Queue
    }
    // The enqueue method puts the Item T as the last element
    // and increases the size n
    public void enqueue(Item T)
    {
    	a[last++]=T;
    	if (last == a.length) // if the last element is at the end of the array
    	{						// then the last element is set to the beginning 
    		last = 0;          // again. This restarts the Queue
    	}
    	  if (n == a.length) 
          {
              resize(2 * a.length); // Double the capacity
          }
    	n++;
    }
    // The dequeue method returns the first element of the queue
    public Item dequeue()
    {
    	if(isEmpty())  // cannot dequeue non-existing elements
    	{
    		throw new NoSuchElementException("Queue underflow");
    	}
    	Item T = a[first]; //First element returned
    	a[first] = null;  // Then set to null
    	n--;              // decrease the size
    	first++;          // points to the next element as the first now.
    	if(first == a.length)
    	{
    		first = 0;  // If first is at the end of the array, then
    	} // the queue is restarted
    	if (n > 0) 
        {
            if (n > 0 && n < a.length / 4) 
            {
                resize(a.length / 2); // Halve the capacity
            }
            return T;
        } 
        else
        {
            throw new NoSuchElementException("Stack underflow");
        }
    	
    }
    
    // This section is for the Iterable interface
    public Iterator<Item> iterator()
    {
    	return new ArrayIterator();
    }
    // This is a private inner class. Dont put toString() inside it.
    private class ArrayIterator implements Iterator<Item>
    {
    	private int i =0;
    	public boolean hasNext()
    	{
    		return i < n;
    	}
    	public Item next()
    	{
    		if (!hasNext())
    		{
    			throw new NoSuchElementException();
    		}
    		Item T = a[(i+first)%a.length];  // The array is traversed
    		i++;                             // in a circular form
    		return T;
    	}
    }
    
   //RESIZE METHOD
    private void resize(int capacity) 
    {
        Item[] newArray = (Item[]) new Object[capacity];
        for (int i = 0; i < n; i++) 
        {
            newArray[i] = a[i];
        }
        a = newArray;
    }
    
    public static <T> void toString(Queue<T> q) 
    {
    	for(T s2: q)
		{
			System.out.print(s2+ " ") ;
		}
		                        
    	
    }
}
