package we.are.bubblesort.MovieApp.shared;

import com.google.gwt.user.client.rpc.IsSerializable;

public abstract class MovieAttribute implements IsSerializable,Comparable<Object>{
	public Object value;
	public String dbLabelName;
	public MovieAttribute(Object value,String dbLabelName){
		this.value = value;
		this.dbLabelName = dbLabelName;
	}

	public int compareTo(Object o){
		return value.toString().compareTo(o.toString());
	}
	
	@Override
	public int hashCode(){
		return value.hashCode();
	}
}
