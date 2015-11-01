package we.are.bubblesort.MovieApp.shared;
import java.util.HashMap;
import java.util.Iterator;

import com.google.gwt.user.client.rpc.IsSerializable;
import com.google.web.bindery.event.shared.SimpleEventBus;


/*
 * To implement a MovieSet -> Set<Movie>
 * To implement a FilterSet -> Set<MovieAttribute>
 */
public class Set<T extends Keyable> extends SimpleEventBus implements Iterable<T>,IsSerializable{
		protected HashMap<Object,T> elements;
		public Set(){
			elements = new HashMap<Object,T>();
		}
		public void add(T element){
			Object key = element.getKey();
			elements.put(key, element);
		}

		public void putAll(Set<T> set_to_import){
			for(T element : set_to_import){
				Object key = element.getKey();
				this.elements.put(key, element);
			}
		}
		public void putAll(Collection<T> collection_to_import){
			for(T element : collection_to_import){
				Object key = element.getKey();
				this.elements.put(key, element);
			}
		}
		public void putAll(T[] array_to_import){
			for(T element : array_to_import){
				Object key = element.getKey();
				this.elements.put(key, element);
			}
		}
		
		public java.util.Collection<T> getAll(){
			return this.elements.values();
		}
		@Override
		public Iterator<T> iterator(){
			return elements.values().iterator();
		}
}
