package we.are.bubblesort.MovieApp.shared;

public class OrderedSet <T extends Comparable<T>> extends Model implements java.io.Serializable,Iterable<T>{
	
	private static final long serialVersionUID = 5907640708328632853L;
	protected java.util.TreeSet<T> elements;
	public OrderedSet(){
		elements = new java.util.TreeSet<T>();
	}
	
	public void add(T element){
		elements.add(element);
	}

	public void add(T[] elements){
		for(T element : elements){
			this.elements.add(element);
		}
	}
	
	public T[] get(){
		@SuppressWarnings("unchecked")
		T[] array = (T[]) this.elements.toArray();
		return array;
	}
	
	@Override
	public java.util.Iterator<T> iterator(){
		return elements.iterator();
	}

}
