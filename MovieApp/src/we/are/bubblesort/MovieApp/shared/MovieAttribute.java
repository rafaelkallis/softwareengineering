package we.are.bubblesort.MovieApp.shared;

public abstract class MovieAttribute implements java.io.Serializable,Comparable<MovieAttribute>{

	private static final long serialVersionUID = 7986627264620732095L;
	public java.io.Serializable value;
	public String displayName;
	public String dbLabelName;
	
	public MovieAttribute(java.io.Serializable value,String dbLabelName,String displayName){
		this.value = value;
		this.dbLabelName = dbLabelName;
		this.displayName = displayName;
	}
	
	@Override
	public int compareTo(MovieAttribute a){
		return value.toString().compareTo(a.toString());
	}
	
	@Override
	public int hashCode(){
		return value.hashCode();

	}
}
