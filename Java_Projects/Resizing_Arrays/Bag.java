import java.util.Iterator;
import java.util.NoSuchElementException;

public class Bag<Item> implements Iterable<Item>
{
    // initial capacity of underlying resizing array
    private static final int CAPACITY = 8;

    private Item[] a;         // array of items
    private int n;            // number of elements on bag

    /**
     * Initializes an empty bag.
     */
    public Bag() 
    {
        a = (Item[]) new Object[CAPACITY];
        n = 0;
    }

    public boolean isEmpty() {
        return n == 0;
    }

    public int size() {
        return n;
    }


    public void add(Item item) 
    {
    	if (n == a.length) 
        {
            resize(2 * a.length); // Double the capacity
        }
        a[n++] = item;                            // add item
    }
    
    public Iterator<Item> iterator() 
    {
        return new ArrayIterator();
   }

    private class ArrayIterator implements Iterator<Item> 
    {
        private int i = 0;

        public boolean hasNext() 
        {
            return i < n;
        }

        public Item next() 
        {
            if (!hasNext()) throw new NoSuchElementException();
            return a[i++];
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
    
    public String toString()
    {
    	String st="";
    	for(int i = 0; i< this.size(); i++)
        {
	       st = st+a[i];
        } 
        return st;
    }
}

