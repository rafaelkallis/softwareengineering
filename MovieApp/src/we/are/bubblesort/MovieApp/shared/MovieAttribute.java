package we.are.bubblesort.MovieApp.shared;

public abstract class MovieAttribute implements SetAddInterface{
	public Object value;
	MovieAttribute(Object value){
		this.value = value;
	}
	public Object getKey(){
		return this.value;
	}
}
