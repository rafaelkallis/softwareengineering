package we.are.bubblesort.MovieApp.server;

import static org.junit.Assert.*;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

import we.are.bubblesort.MovieApp.shared.WrongCredentialsException;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mindrot.jbcrypt.BCrypt;

import we.are.bubblesort.MovieApp.shared.User;

public class UserServiceImplTest {
	UserServiceImpl userService;
	User testUser = new User("unit-test-user" + Double.toString(Math.random()));
	String testUserPassword = "testpassword";
	String validSessionId = "123456789" + Double.toString(Math.random());
	
	@Before
	public void setUp() {
		this.createSampleUser(testUser, testUserPassword);
		this.createValidSessionId(testUser, validSessionId);
	}

	@Test
	public void loginUserWithPasswordReturnsLoggedInUser() {
		User returnUser = this.userService.loginWithPassword(this.testUser, this.testUserPassword);
		
		assertEquals(testUser.getUsername(), returnUser.getUsername());
		assertTrue(returnUser.isLoggedIn());
		assertNotNull(returnUser.getSessionId());

		this.deleteSession(returnUser.getSessionId());
	}
	
	@Test
	public void loginUserWithSessionReturnsLoggedInUser() {
		User returnUser = this.userService.loginWithSession(this.testUser, this.validSessionId);
		
		assertEquals(testUser.getUsername(), returnUser.getUsername());
		assertTrue(returnUser.isLoggedIn());
		assertNotNull(returnUser.getSessionId());
		
		this.deleteSession(returnUser.getSessionId());
	}
	
	@Test
	public void sessionsAreNotReused() {
		User returnUser = this.userService.loginWithSession(this.testUser, this.validSessionId);
		
		assertNotEquals(returnUser.getSessionId(), this.validSessionId);
		
		returnUser = this.userService.loginWithPassword(this.testUser, this.testUserPassword);
		
		assertNotEquals(returnUser.getSessionId(), this.validSessionId);

		this.deleteSession(returnUser.getSessionId());
	}
	
	@Test(expected=WrongCredentialsException.class)
	public void loginUserWithPasswordThrowsWrongCredentialExceptionWithWrongCredentials() {
		this.userService.loginWithPassword(this.testUser, "wrongpassword");
	}
	
	@Test(expected=WrongCredentialsException.class)
	public void loginUserWithPasswordThrowsWrongCredentialsExceptionWithNotExistingUser() {
		this.userService.loginWithPassword(new User("some-user"), "somepassword");
	}
	
	@Test
	public void loginUserWithSessionThrowsInvalidSessionExceptionWithInvalidSession() {
		this.userService.loginWithSession(this.testUser, "somesession");
	}
	
	@Test
	public void loginUserWithSessionThrowsInvalidSessionExceptionWithNotExistingUser() {
		this.userService.loginWithSession(new User("some-user"), "somesession");
	}
	
	@After
	public void tearDown() {
		this.deleteUser(this.testUser);
		this.deleteSession(this.validSessionId);
	}
	
	private void createSampleUser(User user, String password) {
		String salt = BCrypt.gensalt(5);
		String hashedPassword = BCrypt.hashpw(password, salt);
		this.doDbQuery("INSERT INTO " + UserServiceImpl.userTableName + " (username, password) " +
				" VALUES ('" + user.getUsername() + "', '" + hashedPassword + "');");
	}
	
	private void deleteUser(User user) {
		this.doDbQuery("DELETE FROM " + UserServiceImpl.userTableName + 
				" WHERE username = '" + user.getUsername() + "';");
	}

	private void createValidSessionId(User user, String sessionId) {
		this.doDbQuery("INSERT INTO " + UserServiceImpl.sessionTableName + " (sid, username) " +
				" VALUES ('" + sessionId + "'" + user.getUsername() + "');");
	}
	
	private void deleteSession(String sessionId) {
		this.doDbQuery("DELETE FROM " + UserServiceImpl.sessionTableName + 
				" WHERE sid = '" + sessionId + "';"); 
	}
	
	private void doDbQuery(String sql) {
		try {
			Connection connection = Database.getInstance().getConnection();
			
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
