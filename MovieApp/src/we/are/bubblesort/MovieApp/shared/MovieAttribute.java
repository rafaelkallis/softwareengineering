package we.are.bubblesort.MovieApp.shared;

import com.google.gwt.user.client.rpc.IsSerializable;

public abstract class MovieAttribute implements Keyable, IsSerializable{
	public Object value;
	public static String dbName;
	
	public MovieAttribute(Object value,String dbName){
		this.value = value;
		MovieAttribute.dbName = dbName;
	}
	
	public Object getKey(){
		return this.value;
	}
}
