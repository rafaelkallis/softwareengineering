package we.are.bubblesort.MovieApp.server;

import we.are.bubblesort.MovieApp.client.QueryService;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import we.are.bubblesort.MovieApp.shared.*;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;

/**
 * The server-side implementation of the RPC service.
 */
@SuppressWarnings("serial")
public class QueryServiceImpl extends RemoteServiceServlet implements QueryService {
	
	/*
	 * Used for reverse queries 
	 */
	private HashMap<String,String> reverseQueryStatements;
	
	public QueryServiceImpl() throws InstantiationException, IllegalAccessException, ClassNotFoundException{
		this.initialize_reverseQueryStatements();
	}
	
	/*
	 * Initializes reverseQueryStatements
	 */
	private void initialize_reverseQueryStatements(){
		if(reverseQueryStatements == null){
			reverseQueryStatements = new HashMap<String,String>();
			reverseQueryStatements.put(MovieID.dbLabelName, 		"SELECT DISTINCT `"+MovieID.dbLabelName+"` 		FROM "+Database.get_table_name()+" ORDER BY `"+MovieID.dbLabelName		+"`;");
			reverseQueryStatements.put(MovieTitle.dbLabelName, 		"SELECT DISTINCT `"+MovieTitle.dbLabelName+"` 	FROM "+Database.get_table_name()+" ORDER BY `"+MovieTitle.dbLabelName	+"`;");
			reverseQueryStatements.put(MovieYear.dbLabelName, 		"SELECT DISTINCT `"+MovieYear.dbLabelName+"` 	FROM "+Database.get_table_name()+" ORDER BY `"+MovieYear.dbLabelName	+"`;");
			reverseQueryStatements.put(MovieLanguage.dbLabelName,	"SELECT DISTINCT `"+MovieLanguage.dbLabelName+"`FROM "+Database.get_table_name()+" ORDER BY `"+MovieLanguage.dbLabelName+"`;");
			reverseQueryStatements.put(MovieCountry.dbLabelName, 	"SELECT DISTINCT `"+MovieCountry.dbLabelName+"` FROM "+Database.get_table_name()+" ORDER BY `"+MovieCountry.dbLabelName	+"`;");
			reverseQueryStatements.put(MovieGenre.dbLabelName, 		"SELECT DISTINCT `"+MovieGenre.dbLabelName+"` 	FROM "+Database.get_table_name()+" ORDER BY `"+MovieGenre.dbLabelName	+"`;");
			reverseQueryStatements.put(MovieDuration.dbLabelName, 	"SELECT DISTINCT `"+MovieDuration.dbLabelName+"`FROM "+Database.get_table_name()+" ORDER BY `"+MovieDuration.dbLabelName+"`;");
		}
	}
	
	/*
	 * (non-Javadoc)
	 * @see we.are.bubblesort.MovieApp.client.QueryService#getMovieCollection(we.are.bubblesort.MovieApp.shared.Set, int, int)
	 * @param filterSet the set of filters sent for querying
	 * @param limit
	 * @param offset
	 * @returns Collection<Movie> collection of the queried movies
	 */
	@Override
	public Collection<Movie> getMovieCollection(UnorderedSet<MovieAttribute> filterSet, int limit, int offset) {
		Collection<Movie> movieCollection = new Collection<Movie>();
		String statement = new String();
    	PreparedStatement pst;
		ResultSet rs;
    	int i=1;

    	try{
    		// String that will used as SQL command
        	statement += " SELECT * FROM " + Database.get_table_name() + " WHERE 1 ";
        	for(MovieAttribute filter : filterSet){
        		if(filter.dbLabelName.equals(MovieTitle.dbLabelName)){
        			statement += (" LIKE "+MovieTitle.dbLabelName+" %?% ");
        		}else{
        			statement += (" AND "+filter.dbLabelName+" ? ");
        		}
        	}
        	if(limit>0) statement += (" LIMIT "+limit);
        	if(limit>0 && offset>0)statement += (" OFFSET "+offset);
        	
        	// Creation of PreparedStatement Template
        	pst = Database.prepareStatement(statement);
        	
        	// Insertion of filters in PreparedStatement
        	for(MovieAttribute filter : filterSet){
        			pst.setString(i++, filter.value.toString());
        			// No Integer check
        	}
        	
        	// Execution
        	rs = Database.execute(pst);
        	
        	// Move results into movieCollection
        	while(rs.next()){
    	   		UnorderedSet<MovieLanguage> languages = new UnorderedSet<MovieLanguage>();
    	   		UnorderedSet<MovieCountry> countries = new UnorderedSet<MovieCountry>();
    	   		/*
    	   		 * TODO
    	   		 * Handle multiple Languages & Countries here
    	   		 * 
    	   		 */
    	   		Movie new_movie = new Movie(new MovieID(rs.getInt(MovieID.dbLabelName)),
    	   									new MovieTitle(rs.getString(MovieTitle.dbLabelName),rs.getString(MovieTitle.dbLabelName)),
    	   									new MovieYear(rs.getInt(MovieYear.dbLabelName),String.valueOf(rs.getInt(MovieYear.dbLabelName))),
    	   									languages,
    	   									countries,
    	   									new MovieDuration(rs.getInt(MovieDuration.dbLabelName),String.valueOf(rs.getInt(MovieDuration.dbLabelName))));
    	   		movieCollection.add(new_movie);
    	   	}
    	}catch (SQLException e){
    		System.err.println("SQLException in MovieApp.QueryServiceImpl.getMovieCollection():\n"+e.getMessage());
    		e.printStackTrace();
    	}
		return movieCollection;
	}
	
	/*
	 * (non-Javadoc)
	 * @see we.are.bubblesort.MovieApp.client.QueryService#getFilterSet(we.are.bubblesort.MovieApp.shared.MovieAttribute, int, int)
	 * @param attribute
	 * @param limit
	 * @param offset
	 * @returns OrderedSet<MovieAttribute>
	 */
	@Override
	public OrderedSet<MovieAttribute> getAttributeSet(MovieAttribute attribute, int limit, int offset){
		OrderedSet<MovieAttribute> attributeSet = new OrderedSet<MovieAttribute>();
		PreparedStatement pst;
		ResultSet rs;
		String statement = new String();
    	try{
    		statement += this.reverseQueryStatements.get(attribute.dbLabelName);
    		if(limit>0) statement += (" LIMIT "+limit);
        	if(limit>0 && offset>0)statement += (" OFFSET "+offset);    	
        	statement+=";";
        	pst = Database.prepareStatement(statement);
        	rs = Database.execute(pst);
        	switch (attribute.dbLabelName) {
    			case MovieID.dbLabelName:
    				while (rs.next()) {
    					attributeSet.add(new MovieID(rs.getInt(MovieID.dbLabelName)));
    				}
    				break;
    			case MovieTitle.dbLabelName:
    				while (rs.next()) {
    					String title = rs.getString(MovieTitle.dbLabelName);
    					attributeSet.add(new MovieTitle(title,title));
    				}
    				break;
    			case MovieYear.dbLabelName:
    				while (rs.next()) {
    					Integer year = rs.getInt(MovieYear.dbLabelName);
    					attributeSet.add(new MovieYear(year,year.toString()));
    				}
    				break;
    			case MovieLanguage.dbLabelName:
    				while (rs.next()) {
    					String lang = rs.getString(MovieLanguage.dbLabelName);
    					attributeSet.add(new MovieLanguage(lang,lang));
    				}
    				break;
    			case MovieCountry.dbLabelName:
    				while (rs.next()) {
    					String country = rs.getString(MovieCountry.dbLabelName);
    					attributeSet.add(new MovieCountry(country,country));
    				}
    				break;
    			case MovieDuration.dbLabelName:
    				while (rs.next()) {
    					Integer duration = rs.getInt(MovieDuration.dbLabelName);
    					attributeSet.add(new MovieDuration(duration,duration.toString()));
    				}
    				break;
    			case MovieGenre.dbLabelName:
    				while (rs.next()){
    					String genre = rs.getString(MovieGenre.dbLabelName);
    					attributeSet.add(new MovieGenre(genre,genre));
    				}
    				break;
    			default:
    				/*
    				 * Attribute does not exist
    				 */
    				throw new SQLException("No attribute found named "+attribute.dbLabelName);
        	}
    	}catch(SQLException e){
    		System.err.println("SQLException in MovieApp.QueryServiceImpl.getAttributeSet():\n"+e.getMessage());
    		e.printStackTrace();
    	}
		return attributeSet;
	}
}
