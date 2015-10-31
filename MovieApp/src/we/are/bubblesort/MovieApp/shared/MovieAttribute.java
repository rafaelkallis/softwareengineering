package we.are.bubblesort.MovieApp.shared;

import com.google.gwt.user.client.rpc.IsSerializable;

public abstract class MovieAttribute implements Keyable, IsSerializable{
	public Object value;
	MovieAttribute(Object value){
		this.value = value;
	}
	public Object getKey(){
		return this.value;
	}
}
