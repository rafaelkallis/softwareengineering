package we.are.bubblesort.MovieApp.server;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public final class Database {
		
	private static Database instance = new Database();
	
	private  		Connection 	conn 		= null;
    private  final 	String 		url  		= "jdbc:mysql://80.74.150.210:3306/movieapp";
    private  final 	String 		user 		= "se_user";
    private  final 	String 		pass 		= "SEIsAwesome2015";
    
    private Database(){
    	try {
    		
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			conn = DriverManager.getConnection(url, user, pass);
			
		} catch (InstantiationException | IllegalAccessException | ClassNotFoundException | SQLException e) {
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
