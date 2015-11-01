package we.are.bubblesort.MovieApp.server;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.MovieCountry;
import we.are.bubblesort.MovieApp.shared.MovieDuration;
import we.are.bubblesort.MovieApp.shared.MovieID;
import we.are.bubblesort.MovieApp.shared.MovieLanguage;
import we.are.bubblesort.MovieApp.shared.MovieTitle;
import we.are.bubblesort.MovieApp.shared.MovieYear;
import we.are.bubblesort.MovieApp.shared.Set;
import we.are.bubblesort.MovieApp.shared.Collection;

import java.util.logging.Level;
import java.util.logging.Logger;

public final class Database extends RemoteServiceServlet {
	/**
	 * Eclipse Generated UID
	 */
	private static final long serialVersionUID 	= 2252293602456602793L;
	
	// num of results per query
	private static final int RESULTS_PER_QUERY 	= 250;

	private Connection conn 					= null;
    @SuppressWarnings("unused")
	private String status; //use enum instead?
    
    private final String db_name 				= "movies";
    private final String url  					= "jdbc:mysql://80.74.150.210:3306/movieapp";
    private final String user 					= "se_user";
    private final String pass 					= "SEIsAwesome2015";
    
    public Database() throws InstantiationException, IllegalAccessException, ClassNotFoundException {
    	super();
        try {
        	this.initialize();
        	
        } catch (SQLException e) {
            Logger lgr = Logger.getLogger(Database.class.getName());
            lgr.log(Level.SEVERE, e.getMessage(), e);
        }
    }
    private void initialize() throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException{
    	Class.forName("com.mysql.jdbc.Driver").newInstance();
        conn = DriverManager.getConnection(url, user, pass);
    }
    
    private static String RESULTS_PER_QUERY(){
    	return " LIMIT "+Database.RESULTS_PER_QUERY;
    }
    
    private PreparedStatement makePreparedStatement(String search_string,int offset) throws SQLException{
    	String statement = new String(" SELECT * FROM " + db_name + " LIKE movie_name=\"%?%\" ");
    	statement += (Database.RESULTS_PER_QUERY()+" OFFSET "+offset+";");
    	PreparedStatement pst = this.conn.prepareStatement(statement);
    	pst.setString(1, search_string);
    	return pst;
    }
    private PreparedStatement makePreparedStatement(Set<MovieAttribute> filterSet,int offset) throws SQLException{
    	String statement = new String(" SELECT * FROM " + db_name + " WHERE 1 AND ");
    	PreparedStatement pst;
    	int i=1;
    	
    	for(MovieAttribute filter : filterSet){
    		statement += (" AND "+filter.dbName+"\"?\" ");
  
    	}
    	statement += (Database.RESULTS_PER_QUERY()+" OFFSET "+offset+";");
    	pst = this.conn.prepareStatement(statement);
    	
    	for(MovieAttribute filter : filterSet){
    		if(filter.value instanceof Integer){
    			pst.setInt(i++, (int) filter.value);
    		}else if(filter.value instanceof String){
    			pst.setString(i++, filter.value.toString());
    		}
    	}
    	return pst;
    }
    /*
     * pass FilterSet
     * returns movieColection
     */
	public Collection<Movie> query(Set<MovieAttribute> filterSet) throws SQLException{
	  	PreparedStatement pst = this.makePreparedStatement(filterSet,0);
	   	ResultSet rs = pst.executeQuery();
	   	Collection<Movie> movieCollection = new Collection<Movie>();

	   	while(rs.next()){
	   		Set<MovieLanguage> languages = new Set<MovieLanguage>();
	   		Set<MovieCountry> countries = new Set<MovieCountry>();
	   		/*
	   		 * TODO
	   		 * Handle multiple Languages & Countries here
	   		 * 
	   		 */
	   		Movie new_movie = new Movie(new MovieID(rs.getInt(MovieID.dbName)),
	   									new MovieTitle(rs.getString(MovieTitle.dbname)),
	   									new MovieYear(rs.getInt(MovieYear.dbName)),
	   									languages,
	   									countries,
	   									new MovieDuration(rs.getInt(MovieDuration.dbName)));
	   		movieCollection.add(new_movie);
	   	}
	   	return movieCollection;
	}
	/*
	 * pass search_string
	 * return movieCollection
	 */
	public Collection<Movie> query(String search_string) throws SQLException{
	   	PreparedStatement pst = this.makePreparedStatement(search_string,0);
	   	ResultSet rs = pst.executeQuery();
	   	Collection<Movie> movieCollection = new Collection<Movie>();
	   	while(rs.next()){
	   		Set<MovieLanguage> languages = new Set<MovieLanguage>();
	   		Set<MovieCountry> countries = new Set<MovieCountry>();
	   		/*
	   		 * TODO
	   		 * Handle multiple Languages & Countries here
	   		 * 
	   		 */
	   		Movie new_movie = new Movie(new MovieID(rs.getInt(MovieID.dbName)),
	   									new MovieTitle(rs.getString(MovieTitle.dbname)),
	   									new MovieYear(rs.getInt(MovieYear.dbName)),
	   									languages,
	   									countries,
	   									new MovieDuration(rs.getInt(MovieDuration.dbName)));
	   		movieCollection.add(new_movie);
	   	}
	   	return movieCollection;
	}
	public Collection<Movie> query(Set<MovieAttribute> filterSet,int offset) throws SQLException{
	  	PreparedStatement pst = this.makePreparedStatement(filterSet,offset);
	   	ResultSet rs = pst.executeQuery();
	   	Collection<Movie> movieCollection = new Collection<Movie>();

	   	while(rs.next()){
	   		Set<MovieLanguage> languages = new Set<MovieLanguage>();
	   		Set<MovieCountry> countries = new Set<MovieCountry>();
	   		/*
	   		 * TODO
	   		 * Handle multiple Languages & Countries here
	   		 * 
	   		 */
	   		Movie new_movie = new Movie(new MovieID(rs.getInt(MovieID.dbName)),
	   									new MovieTitle(rs.getString(MovieTitle.dbname)),
	   									new MovieYear(rs.getInt(MovieYear.dbName)),
	   									languages,
	   									countries,
	   									new MovieDuration(rs.getInt(MovieDuration.dbName)));
	   		movieCollection.add(new_movie);
	   	}
	   	return movieCollection;
	}
	/*
	 * pass search_string
	 * return movieCollection
	 */
	public Collection<Movie> query(String search_string, int offset) throws SQLException{
	   	PreparedStatement pst = this.makePreparedStatement(search_string,offset);
	   	ResultSet rs = pst.executeQuery();
	   	Collection<Movie> movieCollection = new Collection<Movie>();
	   	while(rs.next()){
	   		Set<MovieLanguage> languages = new Set<MovieLanguage>();
	   		Set<MovieCountry> countries = new Set<MovieCountry>();
	   		/*
	   		 * TODO
	   		 * Handle multiple Languages & Countries here
	   		 * 
	   		 */
	   		Movie new_movie = new Movie(new MovieID(rs.getInt(MovieID.dbName)),
	   									new MovieTitle(rs.getString(MovieTitle.dbname)),
	   									new MovieYear(rs.getInt(MovieYear.dbName)),
	   									languages,
	   									countries,
	   									new MovieDuration(rs.getInt(MovieDuration.dbName)));
	   		movieCollection.add(new_movie);
	   	}
	   	return movieCollection;
	}
	
	
}
