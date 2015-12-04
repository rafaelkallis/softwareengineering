package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.InvalidSessionException;
import we.are.bubblesort.MovieApp.shared.User;
import we.are.bubblesort.MovieApp.shared.WrongCredentialsException;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

@RemoteServiceRelativePath("user")
public interface UserService extends RemoteService {
	public final static String sessionCookieName = "sid";
	
	public User loginWithPassword(User user, String password) throws WrongCredentialsException;
	public User loginWithSession(String sessionId) throws InvalidSessionException;
	public User changePassword(String sessionId, String oldPassword, String newPassword) throws InvalidSessionException, WrongCredentialsException;
}
