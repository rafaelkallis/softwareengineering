package we.are.bubblesort.MovieApp.shared;

import com.google.gwt.user.client.rpc.IsSerializable;

public abstract class MovieAttribute implements IsSerializable,Comparable<MovieAttribute>{

	public String value;
	public String displayName;
	public String dbLabelName;
	
	public MovieAttribute(){
		
	}
	
	public MovieAttribute(String value,String dbLabelName,String displayName){
		this.value = value;
		this.dbLabelName = dbLabelName;
		this.displayName = displayName;
	}
	
	@Override
	public int compareTo(MovieAttribute a){
		return value.compareTo(a.value.toString());
	}
	
	@Override
	public int hashCode(){
		return value.hashCode();
	}
	
	@Override
	public String toString(){
		return displayName;
	}
}
