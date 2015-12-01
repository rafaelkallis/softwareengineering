package we.are.bubblesort.MovieApp.server;

import static org.junit.Assert.*;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

import we.are.bubblesort.MovieApp.shared.InvalidSessionException;
import we.are.bubblesort.MovieApp.shared.WrongCredentialsException;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mindrot.jbcrypt.BCrypt;

import we.are.bubblesort.MovieApp.shared.User;

public class UserServiceImplTest {
	UserServiceImpl userService = new UserServiceImpl();
	User testUser = new User("unit-test-user" + Double.toString(Math.random()), "Unit Test User");
	String testUserPassword = "testpassword";
	String validSessionId = "123456789" + Double.toString(Math.random());
	String expiredSessionId = "123456789" + Double.toString(Math.random());
	
	@Before
	public void setUp() {
		this.createSampleUser(testUser, testUserPassword);
		this.createValidSessionId(testUser, validSessionId, 30);
		this.createValidSessionId(testUser, expiredSessionId, -10);
	}

	@Test
	public void loginUserWithPasswordReturnsLoggedInUser() throws WrongCredentialsException {
		User returnUser = this.userService.loginWithPassword(this.testUser, this.testUserPassword);

		assertEquals(testUser.getUsername(), returnUser.getUsername());
		assertEquals(returnUser.getName(), "Unit Test User");
		assertTrue(returnUser.isLoggedIn());
		assertNotNull(returnUser.getSessionId());

		this.deleteSession(returnUser.getSessionId());
	}
	
	@Test
	public void loginUserWithSessionReturnsLoggedInUser() throws InvalidSessionException {
		User returnUser = this.userService.loginWithSession(this.validSessionId);

		assertEquals(testUser.getUsername(), returnUser.getUsername());
		assertEquals(testUser.getName(), returnUser.getName());
		assertTrue(returnUser.isLoggedIn());
		assertNotNull(returnUser.getSessionId());
		
		this.deleteSession(returnUser.getSessionId());
	}
	
	@Test
	public void sessionsAreNotReused() throws WrongCredentialsException, InvalidSessionException {
		User returnUser = this.userService.loginWithPassword(this.testUser, this.testUserPassword);
		
		assertNotEquals(returnUser.getSessionId(), this.validSessionId);

		this.deleteSession(returnUser.getSessionId());
	}
	
	@Test(expected=WrongCredentialsException.class)
	public void loginUserWithPasswordThrowsWrongCredentialExceptionWithWrongCredentials() throws WrongCredentialsException {
		this.userService.loginWithPassword(this.testUser, "wrongpassword");
	}
	
	@Test(expected=WrongCredentialsException.class)
	public void loginUserWithPasswordThrowsWrongCredentialsExceptionWithNotExistingUser() throws WrongCredentialsException {
		this.userService.loginWithPassword(new User("some-user"), this.testUserPassword);
	}
	
	@Test(expected=InvalidSessionException.class)
	public void loginUserWithSessionThrowsInvalidSessionExceptionWithInvalidSession() throws InvalidSessionException {
		this.userService.loginWithSession("wrongsession");
	}
	
	@Test(expected=InvalidSessionException.class)
	public void loginUserWithSessionThrowsInvalidSessionExceptionWithExpiredSession() throws InvalidSessionException {
		this.userService.loginWithSession(expiredSessionId);
	}
	
	@After
	public void tearDown() {
		this.deleteUser(this.testUser);
		this.deleteSession(this.validSessionId);
		this.deleteSession(this.expiredSessionId);
	}
	
	private void createSampleUser(User user, String password) {
		String salt = BCrypt.gensalt(5);
		String hashedPassword = BCrypt.hashpw(password, salt);
		this.doDbQuery("INSERT INTO " + UserServiceImpl.userTableName + " (username, password, name) " +
				" VALUES ('" + user.getUsername() + "', '" + hashedPassword + "', '" + user.getName() + "');");
	}
	
	private void deleteUser(User user) {
		this.doDbQuery("DELETE FROM " + UserServiceImpl.userTableName + 
				" WHERE username = '" + user.getUsername() + "';");
	}

	private void createValidSessionId(User user, String sessionId, Integer secondsFromNow) {
		String query = "INSERT INTO " + UserServiceImpl.sessionTableName + " (sid, username, expires) " +
				" VALUES ('" + sessionId + "', '" + user.getUsername() + "', DATE_ADD(NOW(), INTERVAL " + secondsFromNow + " SECOND));";
		this.doDbQuery(query);
	}
	
	private void deleteSession(String sessionId) {
		this.doDbQuery("DELETE FROM " + UserServiceImpl.sessionTableName + 
				" WHERE sid = '" + sessionId + "';"); 
	}
	
	private void doDbQuery(String sql) {
		try {
			Connection connection = Database.getInstance().getNewConnection();
			
			try {
				Statement statement = connection.createStatement();
				statement.executeUpdate(sql);
				
	    		statement.close();
			}
			finally {
				connection.close();
			}
		}
		catch (SQLException e) {
				e.printStackTrace();
		}
	}
}
