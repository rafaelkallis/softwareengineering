package we.are.bubblesort.MovieApp.server;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public final class Database {
		
	private static Connection conn 			= null;
    private static final String table_name 	= "movies";
    private static final String url  		= "jdbc:mysql://80.74.150.210:3306/movieapp";
    private static final String user 		= "se_user";
    private static final String pass 		= "SEIsAwesome2015";
    
    public Database() throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
    	Class.forName("com.mysql.jdbc.Driver").newInstance();
        Database.conn = DriverManager.getConnection(url, user, pass);
    }
	
    /*
     * @param pst PreparedStatement to be executed
     * @returns ResultSet 
     */
	public static ResultSet execute(PreparedStatement pst) throws SQLException{
		return pst.executeQuery();
	}
	
	/*
	 * @param sql string used as a command
	 * @returns PreparedStatement
	 */
	public static PreparedStatement prepareStatement(String sql) throws SQLException{
		return Database.conn.prepareStatement(sql);
	}
	
	/*
	 * @returns table name
	 */
	public static String get_table_name(){
		return Database.table_name;
	}
	
}
