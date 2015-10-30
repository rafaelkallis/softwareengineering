package we.are.bubblesort.MovieApp.shared;

import java.util.Iterator;
import java.util.List;

public class Collection<T> extends EventBus implements Iterable<T> {
	protected List<T> elements;
	
	public void add(T element) {
		this.elements.add(element);
	}

	@Override
	public Iterator<T> iterator() {
		return elements.iterator();
	}
}
