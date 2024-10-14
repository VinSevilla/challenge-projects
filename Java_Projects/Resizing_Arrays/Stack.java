import java.util.Arrays;
import java.util.Iterator;
import java.util.NoSuchElementException;

public class Stack<Item> implements Iterable<Item> 
{
	
	

    // initial capacity of underlying resizing array
    private static final int INIT_CAPACITY = 8;

    private Item[] a;         // array of items
    private int n;            // number of elements on stack
    

    /**
     * Initializes an empty stack.
     */
    public Stack() 
    {
        a = (Item[]) new Object[INIT_CAPACITY];
        n = 0;
    }

    /**
     * Is this stack empty?
     * @return true if this stack is empty; false otherwise
     */
    public boolean isEmpty() 
    {
        return n == 0;
    }

    /**
     * Returns the number of items in the stack.
     * @return the number of items in the stack
     */
    public int size() 
    {
        return n;
    }



    /**
     * Adds the item to this stack.
     * @param item the item to add
     */
    public void push(Item item) 
    {
        if (n == a.length) 
        {
            resize(2 * a.length); // Double the capacity
        }
       
        a[n++] = item; // add item
    }

    /**
     * Removes and returns the item most recently added to this stack.
     * @return the item most recently added
     * @throws java.util.NoSuchElementException if this stack is empty
     */
    public Item pop() 
    {
        if (isEmpty()) throw new NoSuchElementException("Stack underflow");
        Item item = a[n-1];
        a[n-1] = null;                              // to avoid loitering
        n--;
        if (n > 0) 
        {
            if (n > 0 && n < a.length / 4) 
            {
                resize(a.length / 2); // Halve the capacity
            }
            return item;
        } 
        else
        {
            throw new NoSuchElementException("Stack underflow");
        }
    }


    /**
     * Returns an iterator to this stack that iterates through the items in LIFO order.
     */
    public Iterator<Item> iterator() 
    {
        return new ReverseArrayIterator();
    }

    // a array iterator, in reverse order
    private class ReverseArrayIterator implements Iterator<Item> 
    {
        private int i;

        public ReverseArrayIterator() 
        {
            i = n-1;
        }

        public boolean hasNext() 
        {
            return i >= 0;
        }

        public Item next() 
        {
            if (!hasNext()) throw new NoSuchElementException();
            return a[i--];
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

    public static <T> void toString(Stack<T> st) 
    {
    	for(T s2: st)
		{
			System.out.println(s2);
		}
		                        
    	
    }
   
    
    
}

