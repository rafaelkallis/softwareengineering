package we.are.bubblesort.MovieApp.server;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import com.google.appengine.api.utils.SystemProperty;

public final class Database {
		
	private static Database instance = new Database();
	
	private  		Connection 	conn 		= null;
    private  final 	String 		user 		= "se_user";
    private  final 	String 		pass 		= "SEIsAwesome2015";
    
    private Database(){
    	try {
        	String url = "";
    		if (SystemProperty.environment.value() ==
    		    SystemProperty.Environment.Value.Production) {
    			
    			// Connect to Google SQL
    			Class.forName("com.mysql.jdbc.GoogleDriver");
    		  url = "jdbc:google:mysql://themovieapp-1121:movieapp/main?user=root";
      		  conn = DriverManager.getConnection(url);
    		} else {
    		 // Connecting from an external network.
    			Class.forName("com.mysql.jdbc.Driver");
    			url = "jdbc:mysql://80.74.150.210:3306/movieapp";
        		conn = DriverManager.getConnection(url, user, pass);
    		}

    		
	    } catch (Exception e) {
	      e.printStackTrace();
	      return;
	    }
    	
    	
//    	try {
//    		
//    		
//    		
//			//Class.forName("com.mysql.jdbc.GoogleDriver").newInstance();
//			//conn = DriverManager.getConnection(url, user, pass);
//			
//		} catch (InstantiationException | IllegalAccessException | ClassNotFoundException | SQLException e) {
//			e.printStackTrace();
//		}
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
