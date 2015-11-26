package we.are.bubblesort.MovieApp.server;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import com.google.appengine.api.utils.SystemProperty;

public final class Database {
		
	private static 	Database 	instance 	= new Database();
	private 		String 		url 		= "";
    private  final 	String 		user 		= "se_user";
    private  final 	String 		pass 		= "SEIsAwesome2015";
    
    private Database(){
    	
    }
    
    /*
     * @returns Database instance of Database
     */
    public static Database getInstance() {
    	return instance;
    }
    
    /*
     * @returns Connection
     * @post connection is open and has to be closed
     */
    public Connection getNewConnection() {
    	Connection conn = null;
    	try {
    		if (SystemProperty.environment.value() == SystemProperty.Environment.Value.Production) {
    			// Connect to Google SQL
    			Class.forName("com.mysql.jdbc.GoogleDriver");
    			url 						= "jdbc:google:mysql://themovieappvnext:themovieappnext/main?user=root";
    			
    		} else {
    			// Connecting from an external network.
    			Class.forName("com.mysql.jdbc.Driver");
    			url 						= "jdbc:mysql://80.74.150.210:3306/movieapp";
        		conn 						= DriverManager.getConnection(url, user, pass);
    		}

	    } catch (ClassNotFoundException | SQLException e) {
	      e.printStackTrace();
	    }
    	
    	return conn;
    }
}