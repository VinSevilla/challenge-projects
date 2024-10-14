
public class Main
{

	public static void main(String[] args)
	{
		Queue<String> q = new Queue<String>();
		
		q.enqueue("1");
		q.enqueue("2");
		q.enqueue("3");
		q.enqueue("4");
		q.enqueue("5");
		q.enqueue("6");
		q.enqueue("7");
		q.enqueue("8");
		q.enqueue("9");
		System.out.println("Queue size: " + q.size());
		q.dequeue();
		q.dequeue();
		q.dequeue();
		System.out.println("Queue size: " + q.size());
  
		System.out.println("");
		Stack<String> st = new Stack<String>();
		st.push("1");
		st.push("2");
		st.push("3");
		st.push("4");
		st.push("5");
		st.push("6");
		st.push("7");
		st.push("8");
		st.push("9");
		System.out.println("Stack size: " + st.size());
		st.pop();
		st.pop();
		st.pop();
		System.out.println("Stack size: " + st.size());
		
		System.out.println("");
		
		Bag<String> b = new Bag<String>();
		b.add("1");
		b.add("2");
		b.add("3");
		b.add("4");
		b.add("5");
		b.add("6");
		b.add("7");
		b.add("8");
		b.add("9");
		System.out.println("Bag size: " + b.size());
	}

}
