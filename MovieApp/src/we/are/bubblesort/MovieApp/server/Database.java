package we.are.bubblesort.MovieApp.server;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;

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
import we.are.bubblesort.MovieApp.shared.UnorderedSet;
import we.are.bubblesort.MovieApp.shared.OrderedSet;
import we.are.bubblesort.MovieApp.shared.Collection;

import java.util.logging.Level;
import java.util.logging.Logger;

public final class Database extends RemoteServiceServlet {
	/**
	 * Eclipse Generated UID
	 */
	private static final long serialVersionUID 	= 2252293602456602793L;
	
	private Connection conn 					= null;
    
    private final String table_name 			= "movies";
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
    
    /*
     * Initializes the database
     */
    private void initialize() throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException{
    	Class.forName("com.mysql.jdbc.Driver").newInstance();
        conn = DriverManager.getConnection(url, user, pass);
    }
    
    /*
     * used for debugging
     */
    public void checkVersion() throws SQLException{
    	Statement st = conn.createStatement();
    	ResultSet rs = st.executeQuery("SELECT VERSION()");
    	if(rs.next()){
    		System.out.println(rs.getString(1));
    	}
    	if(rs!=null)rs.close();
    	if(st!=null)st.close();
    	
    }
    
    /*
     * @param filterSet 	The set of all MovieAttributes
     * @param offset 		The offset for the results
     * @param limit 		The limit of results. If 0, then there are unlimited results
     * @exception SQLException if no connection exists
     * @return PreparedStatement the Statement for lookup
     */
    private PreparedStatement makePreparedStatementQuery(UnorderedSet<MovieAttribute> filterSet,int offset,int limit) throws SQLException{
    	String statement = new String(" SELECT * FROM " + table_name + " WHERE 1 AND ");
    	PreparedStatement pst;
    	int i=1;
    	
    	for(MovieAttribute filter : filterSet){
    		if(filter instanceof MovieTitle){
    			statement += (" LIKE "+filter.dbLabelName+"\"%?%\" ");
    		}else{
    			statement += (" AND "+filter.dbLabelName+"\"?\" ");
    		}
 
    	}
    	if(offset>0)statement += (" OFFSET "+offset);
    	//if(limit>0) statement += (" LIMIT "+limit);
    	pst = this.conn.prepareStatement(statement);
    	pst.setMaxRows(limit);
    	for(MovieAttribute filter : filterSet){
    		if(filter.value instanceof Integer){
    			pst.setInt(i++, (int) filter.value);
    		}else if(filter.value instanceof String){
    			pst.setString(i++, filter.value.toString());
    		}
    	}
    	
    	return pst;
    }
    
    private PreparedStatement makePreparedStatementReverseQuery(MovieAttribute attribute, int offset, int limit) throws SQLException{
    	String statement = new String(" SELECT DISTINCT "+attribute.dbLabelName+" FROM "+table_name+" ORDER BY "+attribute.dbLabelName);
    	if(offset>0)statement += " OFFSET "+offset;
    	statement+=";";
    	PreparedStatement pst = conn.prepareStatement(statement);
    	if(limit>0)pst.setMaxRows(limit);
    	return pst;
    }
	
	/*
	 * @param filterSet
	 * @param offset
	 * @param limit
	 * @exception SQLException if no connection exists
	 * @returns movieCollection
	 */
	public Collection<Movie> query(UnorderedSet<MovieAttribute> filterSet,int offset,int limit) throws SQLException{
	  	PreparedStatement pst = this.makePreparedStatementQuery(filterSet,offset,limit);
	   	ResultSet rs = pst.executeQuery();
	   	Collection<Movie> movieCollection = new Collection<Movie>();

	   	while(rs.next()){
	   		UnorderedSet<MovieLanguage> languages = new UnorderedSet<MovieLanguage>();
	   		UnorderedSet<MovieCountry> countries = new UnorderedSet<MovieCountry>();
	   		/*
	   		 * TODO
	   		 * Handle multiple Languages & Countries here
	   		 * 
	   		 */
	   		Movie new_movie = new Movie(new MovieID(rs.getInt(MovieID.dbLabelName)),
	   									new MovieTitle(rs.getString(MovieTitle.dbLabelName)),
	   									new MovieYear(rs.getInt(MovieYear.dbLabelName)),
	   									languages,
	   									countries,
	   									new MovieDuration(rs.getInt(MovieDuration.dbLabelName)));
	   		movieCollection.add(new_movie);
	   	}
	   	return movieCollection;
	}
	
	/*
	 * Returns all available attributes from passed attribute
	 * @param attribute
	 * @param limit
	 * @param offset
	 * @returns OrderedSet<MovieAttribute> of all available MovieAttributes corresponding to the passed attribute
	 */
	public OrderedSet<MovieAttribute> reverseQuery(MovieAttribute attribute,int limit, int offset) throws SQLException{
		PreparedStatement pst = this.makePreparedStatementReverseQuery(attribute, limit, offset);
		ResultSet rs = pst.executeQuery();
		OrderedSet<MovieAttribute> attributeSet = new OrderedSet<MovieAttribute>();
		
		switch (attribute.dbLabelName) {
			case MovieID.dbLabelName:
				while (rs.next()) {
					attributeSet.add(new MovieID(rs.getInt(MovieID.dbLabelName)));
				}
				break;
			case MovieTitle.dbLabelName:
				while (rs.next()) {
					attributeSet.add(new MovieTitle(rs.getString(MovieTitle.dbLabelName)));
				}
				break;
			case MovieYear.dbLabelName:
				while (rs.next()) {
					attributeSet.add(new MovieYear(rs.getInt(MovieYear.dbLabelName)));
				}
				break;
			case MovieLanguage.dbLabelName:
				while (rs.next()) {
					attributeSet.add(new MovieLanguage(rs.getString(MovieLanguage.dbLabelName)));
				}
				break;
			case MovieCountry.dbLabelName:
				while (rs.next()) {
					attributeSet.add(new MovieCountry(rs.getString(MovieCountry.dbLabelName)));
				}
				break;
			case MovieDuration.dbLabelName:
				while (rs.next()) {
					attributeSet.add(new MovieDuration(rs.getInt(MovieDuration.dbLabelName)));
				}
				break;
			default:
				/*
				 * Attribute does not exist
				 */
		}
		return attributeSet;
	}
}
