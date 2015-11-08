package we.are.bubblesort.MovieApp.shared;

import com.google.gwt.user.client.rpc.IsSerializable;

public class OrderedSet <T extends Comparable<T>> extends Model implements Iterable<T>,IsSerializable{
	
	private java.util.TreeSet<T> elements;
	
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
	public int size(){
		return elements.size();
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
