package we.are.bubblesort.MovieApp.shared;

import java.util.Iterator;
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
	
	public T[] toArray(T[] array){
		return elements.toArray(array);
	}
	
	public void clear(){
		elements.clear();
	}
	
	@Override
	public java.util.Iterator<T> iterator(){
		return elements.iterator();
	}

	public String toJoinedString(String delimiter){
		Iterator<T> object = elements.iterator();
		StringBuilder sb = new StringBuilder();
		while(object.hasNext()){
			sb.append(object.next());
			if(object.hasNext()){
				sb.append(delimiter);
			}
		}
		return sb.toString();
	}
}
