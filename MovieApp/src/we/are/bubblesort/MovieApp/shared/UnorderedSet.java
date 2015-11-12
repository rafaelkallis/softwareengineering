package we.are.bubblesort.MovieApp.shared;

import org.apache.commons.lang3.StringUtils;
import com.google.gwt.user.client.rpc.IsSerializable;

public class UnorderedSet<T> extends Model implements IsSerializable,Iterable<T>{

		private java.util.HashSet<T> elements;
		
		public UnorderedSet(){
			elements = new java.util.HashSet<T>();
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
		
		public String toJoinedString(String delimiter){
			return StringUtils.join(elements, delimiter);
		}
}
