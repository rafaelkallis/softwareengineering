package we.are.bubblesort.MovieApp.server;
import com.google.gwt.user.client.rpc.AsyncCallback;

public interface DBConnectionAsync {
	public void authenticateUser(String user, String pass, AsyncCallback<DatabaseUser>
	callback);
}
