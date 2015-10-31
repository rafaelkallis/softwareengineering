package we.are.bubblesort.MovieApp.server;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Vector;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import we.are.bubblesort.MovieApp.server.DatabaseUser;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.Set;

import java.util.logging.Level;
import java.util.logging.Logger;

public class Database extends RemoteServiceServlet {
	/**
	 * Eclipse Generated UID
	 */
	private static final long serialVersionUID = 2252293602456602793L;
	private Connection conn = null;
    private String status;
    private String db_name = "movies";
    private String url  = "jdbc:mysql://80.74.150.210:3306/movieapp";
    private String user = "se_user";
    private String pass = "SEIsAwesome2015";
    public Database() throws InstantiationException, IllegalAccessException, ClassNotFoundException {
        try {
                Class.forName("com.mysql.jdbc.Driver").newInstance();
                conn = DriverManager.getConnection(url, user, pass);
        } catch (SQLException ex) {
            Logger lgr = Logger.getLogger(Database.class.getName());
            lgr.log(Level.SEVERE, ex.getMessage(), ex);

        }
    }
    
    private PreparedStatement makeStringToPreparedStatement(String search_string) throws SQLException{
    	String statement = new String(" SELECT * FROM " + db_name + " WHERE movie_name=\"?\" ;");
    	PreparedStatement pst = this.conn.prepareStatement(statement);
    	pst.setString(1, search_string);
    	return pst;
    }
    private PreparedStatement makeFilterSetToPreparedStatement(Set<MovieAttribute> filters) throws SQLException{
    	String statement = new String(" SELECT * FROM " + db_name + " WHERE 1 AND ");
    	PreparedStatement pst;
    	int i=1;
    	
    	for(MovieAttribute filter : filters){
    		statement += (" AND "+filter.db_name+"\"?\" ");
  
    	}
    	pst = this.conn.prepareStatement(statement+";");
    	
    	for(MovieAttribute filter : filters){
    		if(filter.value instanceof Integer){
    			pst.setInt(i++, (int) filter.value);
    		}else if(filter.value instanceof String){
    			pst.setString(i++, filter.value.toString());
    		}
    	}
    	return pst;
    }
}
