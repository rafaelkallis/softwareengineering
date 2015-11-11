package we.are.bubblesort.MovieApp.server;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import com.google.appengine.api.utils.SystemProperty;

public final class Database {
		
	private static 	Database 	instance 	= new Database();
	private 		String 		url 		= "";
	private  		Connection 	conn 		= null;
    private  final 	String 		user 		= "se_user";
    private  final 	String 		pass 		= "SEIsAwesome2015";
    
    private Database(){
    	try {
        	
    		if (SystemProperty.environment.value() == SystemProperty.Environment.Value.Production) {
    			
    			// Connect to Google SQL
    			Class.forName("com.mysql.jdbc.GoogleDriver");
    			url 						= "jdbc:google:mysql://themovieapp-1121:movieapp/main?user=root";
      		  	conn 						= DriverManager.getConnection(url);
    		} else {
    			
    			// Connecting from an external network.
    			Class.forName("com.mysql.jdbc.Driver");
    			url 						= "jdbc:mysql://80.74.150.210:3306/movieapp";
        		conn 						= DriverManager.getConnection(url, user, pass);
    		}

	    } catch (ClassNotFoundException | SQLException e) {
	      e.printStackTrace();
	    }
    }
    
    /*
     * @returns Database instance of Database
     */
    public static Database getInstance() {
    	return instance;
    }
	
    /*
     * @param pst PreparedStatement to be executed
     * @returns ResultSet 
     */
	public ResultSet execute(PreparedStatement pst) throws SQLException{
		System.out.println(pst.toString());
		return pst.executeQuery();
	}
	
	/*
	 * @param sql string used as a command
	 * @returns PreparedStatement
	 */
	public PreparedStatement prepareStatement(String sql) throws SQLException{
		return conn.prepareStatement(sql);
	}
	
}