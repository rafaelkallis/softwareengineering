package we.are.bubblesort.MovieApp.shared;

public class User {
	protected String username = "anonymous";
	protected String sessionId = null;
	
	public User(String username) {
		this.username = username;
	}
	
	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}
	
	public Boolean isLoggedIn() {
		return (sessionId != null);
	}
	
	public String getUsername() {
		return this.username;
	}

	public String getSessionId() {
		return this.sessionId;
	}
}
