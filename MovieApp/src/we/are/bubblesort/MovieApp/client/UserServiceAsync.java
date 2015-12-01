package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

import we.are.bubblesort.MovieApp.shared.User;

public interface UserServiceAsync {
	public void loginWithPassword(User user, String password, AsyncCallback<User> callback);
	public void loginWithSession(String sessionId, AsyncCallback<User> callback);
}