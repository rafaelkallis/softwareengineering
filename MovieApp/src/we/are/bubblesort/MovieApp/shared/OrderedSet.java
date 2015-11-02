package we.are.bubblesort.MovieApp.shared;

import java.util.Iterator;
import java.util.TreeSet;

public class OrderedSet <T extends Comparable<Object>> implements Iterable<T>{
	protected TreeSet<T> elements;
	public OrderedSet(){
		elements = new TreeSet<T>();
	}
	public void add(T element){
		elements.add(element);
	}
	
	public void addAll(OrderedSet<T> collection_to_import){
		this.elements.addAll(collection_to_import.elements);
	}
	public void addAll(Collection<T> collection_to_import){
		for(T element : collection_to_import){
			this.elements.add(element);
		}
	}
	public void addAll(UnorderedSet<T> collection_to_import){
		for(T element : collection_to_import){
			this.elements.add(element);
		}
	}

	@Override
	public Iterator<T> iterator(){
		return elements.iterator();
	}

}
