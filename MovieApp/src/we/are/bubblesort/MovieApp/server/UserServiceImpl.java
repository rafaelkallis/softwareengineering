package we.are.bubblesort.MovieApp.server;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

import org.mindrot.jbcrypt.BCrypt;

import we.are.bubblesort.MovieApp.client.UserService;
import we.are.bubblesort.MovieApp.shared.InvalidSessionException;
import we.are.bubblesort.MovieApp.shared.User;
import we.are.bubblesort.MovieApp.shared.WrongCredentialsException;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;

@SuppressWarnings("serial")
public class UserServiceImpl extends RemoteServiceServlet implements UserService {
	static String userTableName = "users";
	static String sessionTableName = "sessions";
	static Integer sessionLifeTime = 3600; // in seconds

	public User loginWithPassword(User user, String password) throws WrongCredentialsException {
		User validUser = null;
		String sql = "SELECT username, password, name FROM `" + userTableName + "`" +
				" WHERE username = ? LIMIT 1;";
		
		try {
			Connection connection = Database.getInstance().getNewConnection();
			
			try {
				PreparedStatement statement = connection.prepareStatement(sql);
				statement.setString(1, user.getUsername());
				
				ResultSet rs = statement.executeQuery();
				String entryPassword = null;
				String entryName = null;
				
				while(rs.next()) {
					entryPassword = rs.getString("password");
					entryName = rs.getString("name");
				}
				
				if (entryPassword == null) {
					// user not found
					throw new WrongCredentialsException();
				}
				
				if (!BCrypt.checkpw(password, entryPassword)) {
					// password incorrect
					throw new WrongCredentialsException();
				}
				
				validUser = new User(user.getUsername(), entryName);
				String sessionId = this.createSession(validUser);
				validUser.setSessionId(sessionId);

				rs.close();
	    		statement.close();
			}
			finally {
				connection.close();
			}
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
		
		return validUser;
	}

	public User loginWithSession(User user, String sessionId) throws InvalidSessionException {
		User validUser = null;
		String sql = "SELECT u.username as username FROM `" + userTableName + "` as u" +
				" JOIN `" + sessionTableName + "` as s" +
				" ON  u.username = s.username WHERE s.sid = ? AND u.username = ? AND expires > NOW()" +
				" LIMIT 1;";
		System.out.println(sql);
		System.out.println(sessionId);
		System.out.println(user.getUsername());
		try {
			Connection connection = Database.getInstance().getNewConnection();
			
			try {
				PreparedStatement statement = connection.prepareStatement(sql);
				statement.setString(1, sessionId);
				statement.setString(2, user.getUsername());
				
				ResultSet rs = statement.executeQuery();
				
				String entryUsername = null;
				
				while(rs.next()) {
					entryUsername = rs.getString("username");
				}
				
				if (entryUsername == null) {
					// user not found/session invalid
					throw new InvalidSessionException();
				}
				
				validUser = new User(user.getUsername());
				validUser.setSessionId(sessionId);

				rs.close();
	    		statement.close();
			}
			finally {
				connection.close();
			}
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
		
		return validUser;
	}
	
	protected String createSession(User user) {
		String sql = "INSERT INTO `" + sessionTableName + "` (username, sid, expires) " +
				" VALUES (?, ?, DATE_ADD(NOW(), INTERVAL " + sessionLifeTime + " SECOND));";
		
		String sessionId = this.getRandomSessionId();
		
		try {
			Connection connection = Database.getInstance().getNewConnection();
			
			try {
				PreparedStatement statement = connection.prepareStatement(sql);
				
				statement.setString(1, user.getUsername());
				statement.setString(2, sessionId);
				
				statement.executeUpdate();
				
	    		statement.close();
			}
			finally {
				connection.close();
			}
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
		
		return sessionId;
	}
	
	protected String getRandomSessionId() {
		return String.valueOf(UUID.randomUUID());
	}
}
