package we.are.bubblesort.MovieApp.shared;

import com.google.gwt.user.client.rpc.IsSerializable;

public class User implements IsSerializable {
	protected String username = "anonymous";
	protected String sessionId = null;
	protected String name = "Anonymous";

	public User() {
	}
	
	public User(String username) {
		this.username = username;
	}

	public User(String username, String name) {
		this.username = username;
		this.name = name;
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
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getName() {
		return this.name;
	}
}
