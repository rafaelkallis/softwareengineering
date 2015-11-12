package we.are.bubblesort.MovieApp.shared;

import java.util.ArrayList;
import java.util.Iterator;
import org.apache.commons.lang3.StringUtils;
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
	
	public T[] get(){
		@SuppressWarnings("unchecked")
		T[] array = (T[]) this.elements.toArray();
		return array;
	}
	
	@Override
	public Iterator<T> iterator() {
		return elements.iterator();
	}
	
	public String toJoinedString(String delimiter){
		return StringUtils.join(elements, delimiter);
	}
}
