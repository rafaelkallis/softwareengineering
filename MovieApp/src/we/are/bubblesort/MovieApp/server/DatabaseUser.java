package we.are.bubblesort.MovieApp.server;

import com.google.gwt.user.client.rpc.IsSerializable;

public class DatabaseUser implements IsSerializable{
	private String username;
    private String password;

    public DatabaseUser(String username, String password) {
        this.username = username;
        this.password = password;
}
}
