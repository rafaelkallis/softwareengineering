package we.are.bubblesort.MovieApp.server;

import we.are.bubblesort.MovieApp.client.UserService;
import we.are.bubblesort.MovieApp.shared.User;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;

@SuppressWarnings("serial")
public class UserServiceImpl extends RemoteServiceServlet implements UserService {
	static String userTableName = "users";
	static String sessionTableName = "sessions";

	public User loginWithPassword(User user, String password) {
		return new User("dummy");
	}

	public User loginWithSession(User testUser, String sessionId) {
		return new User("dummy");
	}
}
