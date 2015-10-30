package we.are.bubblesort.MovieApp.server;

import com.google.gwt.user.client.rpc.RemoteService;

public interface DBConnection extends RemoteService{
	public DatabaseUser authenticateUser(String user, String pass);
}
