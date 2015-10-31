package we.are.bubblesort.MovieApp.shared;

import com.google.gwt.user.client.rpc.IsSerializable;

public abstract class MovieAttribute implements Keyable, IsSerializable{
	public Object value;
	public String db_name;
	MovieAttribute(Object value,String db_name){
		this.value = value;
		this.db_name = db_name;
	}
	public Object getKey(){
		return this.value;
	}
}
