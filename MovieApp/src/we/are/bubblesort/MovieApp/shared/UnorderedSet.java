package we.are.bubblesort.MovieApp.shared;

public class UnorderedSet<T> implements java.io.Serializable,Iterable<T>{

	private static final long serialVersionUID = 1317107501326760543L;
		protected java.util.HashSet<T> elements;
		public UnorderedSet(){
			elements = new java.util.HashSet<T>();
		}
		
		public void add(T element){
			elements.add(element);
		}
		
		@Override
		public java.util.Iterator<T> iterator(){
			return elements.iterator();
		}
}
