package we.are.bubblesort.MovieApp.server;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Vector;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import we.are.bubblesort.MovieApp.server.DatabaseUser;

public class Database extends RemoteServiceServlet implements DBConnection {
	/**
	 * Eclipse Generated UID
	 */
	private static final long serialVersionUID = 2252293602456602793L;
	private Connection conn = null;
    private String status;
    private String url  = "jdbc:mysql://80.74.150.210:3306/movieapp";
    private String user = "se_user";
    private String pass = "SEIsAwesome2015";
    public Database() {
        try {
                Class.forName("com.mysql.jdbc.Driver").newInstance();
                conn = DriverManager.getConnection(url, user, pass);
        } catch (Exception e) {
                //NEVER catch exceptions like this
        }
    }
    
    public DatabaseUser authenticateUser(String user, String pass) {
        DatabaseUser new_user = null;
        try {
                PreparedStatement ps = conn.prepareStatement("select readonly * from users where username = \"" + user + "\" AND " +"password = \"" + pass + "\"");
                ResultSet result = ps.executeQuery();
                while (result.next()) {
                	new_user = new DatabaseUser(result.getString(1),result.getString(2));
                }
        	result.close();
        	ps.close();
    	} catch (SQLException sqle) {
    		//do stuff on fail
    	}
        return new_user;
    }
}
