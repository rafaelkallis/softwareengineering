package we.are.bubblesort.MovieApp.server;

import we.are.bubblesort.MovieApp.client.QueryService;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.MovieID;
import we.are.bubblesort.MovieApp.shared.MovieYear;
import we.are.bubblesort.MovieApp.shared.MovieLanguage;
import we.are.bubblesort.MovieApp.shared.MovieGenre;
import we.are.bubblesort.MovieApp.shared.MovieDuration;
import we.are.bubblesort.MovieApp.shared.MovieTitle;
import we.are.bubblesort.MovieApp.shared.MovieCountry;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;
import we.are.bubblesort.MovieApp.shared.WorldStatisticsModel;
import we.are.bubblesort.MovieApp.shared.WorldStatisticsModel.WorldStatisticsModelEntry;

import we.are.bubblesort.MovieApp.shared.OrderedSet;
import we.are.bubblesort.MovieApp.shared.Movie;
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
	
	private String movie_table = "movies";
	
	private String statisticsModelCommand;
	
	public QueryServiceImpl() throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException{
		this.initialize_reverseQueryStatements();
		this.initialize_statisticsModelCommand();
	}
	
	/*
	 * Initializes reverseQueryStatements
	 */
	private void initialize_reverseQueryStatements() throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException{
		if(reverseQueryStatements == null){
			reverseQueryStatements = new HashMap<String,String>();
			reverseQueryStatements.put(MovieID.dbLabelName, 		"SELECT DISTINCT `"+MovieID.dbLabelName+"` 		FROM "+movie_table+" ORDER BY `"+MovieID.dbLabelName		+"`");
			reverseQueryStatements.put(MovieTitle.dbLabelName, 		"SELECT DISTINCT `"+MovieTitle.dbLabelName+"` 	FROM "+movie_table+" ORDER BY `"+MovieTitle.dbLabelName	+"`");
			reverseQueryStatements.put(MovieYear.dbLabelName, 		"SELECT DISTINCT `"+MovieYear.dbLabelName+"` 	FROM "+movie_table+" ORDER BY `"+MovieYear.dbLabelName	+"`");
			reverseQueryStatements.put(MovieLanguage.dbLabelName,	"SELECT DISTINCT `"+MovieLanguage.dbLabelName+"`FROM "+movie_table+" ORDER BY `"+MovieLanguage.dbLabelName+"`");
			reverseQueryStatements.put(MovieCountry.dbLabelName, 	"SELECT DISTINCT `"+MovieCountry.dbLabelName+"` FROM "+movie_table+" ORDER BY `"+MovieCountry.dbLabelName	+"`");
			reverseQueryStatements.put(MovieGenre.dbLabelName, 		"SELECT DISTINCT `"+MovieGenre.dbLabelName+"` 	FROM "+movie_table+" ORDER BY `"+MovieGenre.dbLabelName	+"`");
			reverseQueryStatements.put(MovieDuration.dbLabelName, 	"SELECT DISTINCT `"+MovieDuration.dbLabelName+"`FROM "+movie_table+" ORDER BY `"+MovieDuration.dbLabelName+"`");
		}
	}
	
	public void initialize_statisticsModelCommand(){
		this.statisticsModelCommand ="SELECT `freebase_countries_to_common_countries`.`iso3166-1-alpha-2`, `countries`.`iso3166-1-numeric`, COUNT(`movie_countries`.`movie_country`) AS NumberOfMovies FROM `movie_countries`"
									+"INNER JOIN `freebase_countries_to_common_countries`"
									+"ON `movie_countries`.`movie_country` = `freebase_countries_to_common_countries`.`freebase_country_name`"
									+"INNER JOIN `countries`"
									+"ON `freebase_countries_to_common_countries`.`iso3166-1-alpha-2` = `countries`.`iso3166-1-alpha-2`"
									+"GROUP BY `iso3166-1-alpha-2`";
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
        	statement += " SELECT * FROM " + movie_table + " WHERE 1 ";
        	for(MovieAttribute filter : filterSet){
        		if(filter.dbLabelName.equals(MovieTitle.dbLabelName)){
        			statement += (" AND "+MovieTitle.dbLabelName+" LIKE ? ");
        		}else{
        			statement += (" AND "+filter.dbLabelName+"= ? ");
        		}
        	}
        	if(limit>0) statement += (" LIMIT "+limit);
        	if(limit>0 && offset>0)statement += (" OFFSET "+offset);
        	statement += ";";
        	
        	// Creation of PreparedStatement Template
        	pst = Database.getInstance().prepareStatement(statement);
        	
        	// Insertion of filters in PreparedStatement
        	for(MovieAttribute filter : filterSet){
        			if(filter.dbLabelName.equals(MovieTitle.dbLabelName)){
        				pst.setString(i++, "%"+filter.value+"%");
            		}else{
            			pst.setString(i++, filter.value);
            		}
        	}
        	
        	// Execution
        	rs = Database.getInstance().execute(pst);
        	
        	// Move results into movieCollection
        	while(rs.next()){
    	   		UnorderedSet<MovieLanguage> languages = new UnorderedSet<MovieLanguage>();
    	   		UnorderedSet<MovieCountry> countries = new UnorderedSet<MovieCountry>();
    	   		UnorderedSet<MovieGenre> genres = new UnorderedSet<MovieGenre>();
    	   		/*
    	   		 * TODO
    	   		 * Handle multiple Languages & Countries here
    	   		 * 
    	   		 */
    	   		Movie new_movie = new Movie(new MovieID(rs.getString(MovieID.dbLabelName)),
    	   									new MovieTitle(rs.getString(MovieTitle.dbLabelName)),
    	   									new MovieYear(rs.getString(MovieYear.dbLabelName)),
    	   									languages,
    	   									countries,
    	   									genres,
    	   									new MovieDuration(rs.getString(MovieDuration.dbLabelName)));
    	   		movieCollection.add(new_movie);
    	   	}
        	rs.close();
    		pst.close();
    	}catch (SQLException e){
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

        	pst = Database.getInstance().prepareStatement(statement);
        	rs = Database.getInstance().execute(pst);

        	switch (attribute.dbLabelName) {
    			case MovieID.dbLabelName:
    				while (rs.next()) {
    					String id = rs.getString(MovieID.dbLabelName);
    					attributeSet.add(new MovieID((id)));
    				}
    				break;
    				
    			case MovieTitle.dbLabelName:
    				while (rs.next()) {
    					String title = rs.getString(MovieTitle.dbLabelName);
    					attributeSet.add(new MovieTitle(title));
    				}
    				break;
    				
    			case MovieYear.dbLabelName:
    				while (rs.next()) {
    					String year = rs.getString(MovieYear.dbLabelName);
    					attributeSet.add(new MovieYear(year));
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
    					String duration = rs.getString(MovieDuration.dbLabelName);
    					attributeSet.add(new MovieDuration(duration));
    				}
    				break;
    				
    			case MovieGenre.dbLabelName:
    				while (rs.next()){
    					String genre = rs.getString(MovieGenre.dbLabelName);
    					attributeSet.add(new MovieGenre(genre,genre));
    				}
    				break;
        	}
        	rs.close();
    		pst.close();
    	}catch(SQLException  e){
    		e.printStackTrace();
    	}
    	
		return attributeSet;
	}

	public WorldStatisticsModel getWorldStatisticsModel(UnorderedSet<MovieAttribute> filterSet){
		WorldStatisticsModel worldStats = new WorldStatisticsModel();
		String statement = this.statisticsModelCommand;
		PreparedStatement pst; 
		ResultSet rs;
		
		try{
			
			pst = Database.getInstance().prepareStatement(statement);
			rs = Database.getInstance().execute(pst);

			while(rs.next()){
				String iso_alpha = rs.getString(WorldStatisticsModelEntry.iso_alpha_DbLabelName);
				Integer iso_numeric = rs.getInt(WorldStatisticsModelEntry.iso_numeric_DbLabelName);
				Integer n_movies = rs.getInt(WorldStatisticsModelEntry.n_movies_DbLabelName);
				worldStats.add(worldStats.new WorldStatisticsModelEntry(iso_alpha,iso_numeric,n_movies));
			}
			rs.close();
    		pst.close();
		}catch(SQLException e){
			e.printStackTrace();
		}

		return worldStats;
	}
}
