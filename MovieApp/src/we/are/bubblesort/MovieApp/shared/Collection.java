package we.are.bubblesort.MovieApp.shared;

import java.util.ArrayList;
import java.util.Iterator;

import com.google.gwt.user.client.rpc.IsSerializable;

public class Collection<T> extends Model implements Iterable<T>,IsSerializable {
	protected ArrayList<T> elements;
	
	public Collection(){
		elements = new ArrayList<T>();
	}
	
	public Collection(int initialSize){
		elements = new ArrayList<T>(initialSize);
	}
	
	public void add(T element) {
		this.elements.add(element);
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
	
	@Override
	public Iterator<T> iterator() {
		return elements.iterator();
	}
	
	public void clear(){
		elements.clear();
	}
	
	public T get(Integer ix) {
		return this.elements.get(ix);
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
