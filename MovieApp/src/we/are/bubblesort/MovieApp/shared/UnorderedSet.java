package we.are.bubblesort.MovieApp.shared;
import java.util.HashSet;
import java.util.Iterator;

import com.google.gwt.user.client.rpc.IsSerializable;
import com.google.web.bindery.event.shared.SimpleEventBus;

public class UnorderedSet<T extends Comparable<Object>> extends SimpleEventBus implements Iterable<T>,IsSerializable{
		protected HashSet<T> elements;
		public UnorderedSet(){
			elements = new HashSet<T>();
		}
		public void add(T element){
			elements.add(element);
		}

		public void putAll(UnorderedSet<T> collection_to_import){
			for(T element : collection_to_import){
				this.elements.add(element);
			}
		}
		public void putAll(Collection<T> collection_to_import){
			for(T element : collection_to_import){
				this.elements.add(element);
			}
		}
		public void putAll(OrderedSet<T> collection_to_import){
			for(T element : collection_to_import){
				this.elements.add(element);
			}
		}
		
		@Override
		public Iterator<T> iterator(){
			return elements.iterator();
		}
}
