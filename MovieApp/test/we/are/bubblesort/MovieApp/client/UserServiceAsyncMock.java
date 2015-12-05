package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.User;

import com.google.gwt.user.client.rpc.AsyncCallback;

public class UserServiceAsyncMock implements UserServiceAsync {

	@Override
	public void loginWithPassword(User user, String password,
			AsyncCallback<User> callback) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void loginWithSession(String sessionId, AsyncCallback<User> callback) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void changePassword(String sessionId, String oldPassword,
			String newPassword, AsyncCallback<User> callback) {
		// TODO Auto-generated method stub
		
	}

}
