package we.are.bubblesort.MovieApp.shared;

import com.google.gwt.user.client.rpc.IsSerializable;

public abstract class MovieAttribute implements Keyable, IsSerializable{
	public Object value;
	public String dbName;
	public MovieAttribute(Object value,String dbName){
		this.value = value;
		this.dbName = dbName;
	}
	public Object getKey(){
		return this.value;
	}
}
