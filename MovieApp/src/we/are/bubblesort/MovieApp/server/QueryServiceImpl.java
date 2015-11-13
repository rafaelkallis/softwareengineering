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
import we.are.bubblesort.MovieApp.shared.WorldStatisticsModelEntry;
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
	private static HashMap<String,String> reverseQueryStatements;
	private static String movie_table = "movies";	
	private static String worldStatisticsModelCommandPre;
	private static String worldStatisticsModelCommandPost;
	
	public QueryServiceImpl() {
		try {
			this.initialize_reverseQueryStatements();
			this.initialize_worldStatisticsModelCommand();
		} catch (InstantiationException | IllegalAccessException | ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
	}
	
	/*
	 * Initializes reverseQueryStatements
	 */
	private void initialize_reverseQueryStatements() throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException{
		if(reverseQueryStatements == null){
			reverseQueryStatements = new HashMap<String,String>();
			reverseQueryStatements.put(MovieID.dbLabelName, 		"SELECT DISTINCT `"+MovieID.dbLabelName+"` 		FROM "+movie_table+" ORDER BY `"+MovieID.dbLabelName		+"`");
			reverseQueryStatements.put(MovieTitle.dbLabelName, 		"SELECT DISTINCT `"+MovieTitle.dbLabelName+"` 	FROM "+movie_table+" ORDER BY `"+MovieTitle.dbLabelName	+"`");
			reverseQueryStatements.put(MovieYear.dbLabelName, 		"SELECT DISTINCT `"+MovieYear.dbLabelName+"`    FROM "+movie_table+" WHERE `movie_release_year` != 0 ORDER BY `"+MovieYear.dbLabelName	+"` DESC");
			reverseQueryStatements.put(MovieLanguage.dbLabelName,	"SELECT DISTINCT language AS `"+MovieLanguage.dbLabelName	+"`	FROM movie_languages ORDER BY language");
			reverseQueryStatements.put(MovieCountry.dbLabelName, 	"SELECT DISTINCT movie_country AS `"+MovieCountry.dbLabelName	+"`	FROM movie_countries ORDER BY movie_country");
			reverseQueryStatements.put(MovieGenre.dbLabelName, 		"SELECT DISTINCT genre AS `"+MovieGenre.dbLabelName	+"` FROM movie_genres ORDER BY `"+MovieGenre.dbLabelName	+"`");
			reverseQueryStatements.put(MovieDuration.dbLabelName, 	"SELECT DISTINCT CEIL(`"+MovieDuration.dbLabelName+"`) as `"+MovieDuration.dbLabelName+"` FROM "+movie_table+" WHERE `"+MovieDuration.dbLabelName+"` IS NOT NULL ORDER BY `"+MovieDuration.dbLabelName+"` ASC");
		}
	}
	
	public void initialize_worldStatisticsModelCommand(){
		worldStatisticsModelCommandPre = "SELECT `countries`.`iso3166-1-alpha-2`, COUNT(`movie_countries`.`movie_country`) As NumberOfMovies, `countries`.`center-latitude` AS `center-lat`, `countries`.`center-longitude` AS `center-long` FROM `movies` " +
										 "JOIN `movie_countries` " + 
										 "ON `movie_countries`.`movie_id` = `movies`.`id`" +
										 "JOIN `freebase_countries_to_common_countries`" +
										 "ON `movie_countries`.`movie_country` = `freebase_countries_to_common_countries`.`freebase_country_name` " +
										 "JOIN `countries` " +
										 "ON `countries`.`iso3166-1-alpha-2` = `freebase_countries_to_common_countries`.`iso3166-1-alpha-2` ";
		
		worldStatisticsModelCommandPost = "GROUP BY `countries`.`iso3166-1-alpha-2`;";
	}
	
	/*
	 * (non-Javadoc)
	 * @see we.are.bubblesort.MovieApp.client.QueryService#getMovieCollection(we.are.bubblesort.MovieApp.shared.Set, int, int)
	 * @param filterSet the set of filters sent for querying
	 * @param limit
	 * @param offset (limit has to be > 0)
	 * @returns Collection<Movie> collection of the queried movies
	 * @pre filterSet != null
	 */
	@Override
	public Collection<Movie> getMovieCollection(UnorderedSet<MovieAttribute> filterSet, int limit, int offset) {
		return getMovieCollectionSync(filterSet,limit,offset);
	}

	/*
	 * (non-Javadoc)
	 * @see we.are.bubblesort.MovieApp.client.QueryService#getMovieCollection(we.are.bubblesort.MovieApp.shared.Set, int, int)
	 * @param filterSet the set of filters sent for querying
	 * @param limit
	 * @param offset (limit has to be > 0)
	 * @returns Collection<Movie> collection of the queried movies
	 * @pre filterSet != null
	 * ONLY SERVER-SIDE USED
	 */
	public static Collection<Movie> getMovieCollectionSync(UnorderedSet<MovieAttribute> filterSet, int limit, int offset) {
		Collection<Movie> movieCollection	= null;
		String statement					= "";
    	PreparedStatement pst				= null;
		ResultSet rs						= null;
    	int i								= 1;

    	try{
    		movieCollection = new Collection<Movie>();

    		// statement += " SELECT * FROM " + movie_table + " WHERE 1 ";
    		statement += "SELECT m.`" + MovieID.dbLabelName + "`," +
    							"m.`" + MovieTitle.dbLabelName + "`," +
    							"LEFT(m.`" + MovieYear.dbLabelName + "`, 4) AS `" + MovieYear.dbLabelName + "`," +
    							"m.`" + MovieDuration.dbLabelName + "`," +
    							" GROUP_CONCAT(DISTINCT movie_countries.movie_country SEPARATOR ',') as movie_countries," +
    							" GROUP_CONCAT(DISTINCT movie_genres.genre SEPARATOR ',') as `" + MovieGenre.dbLabelName + "`," +
    							" GROUP_CONCAT(DISTINCT movie_languages.language SEPARATOR ',') as `" + MovieLanguage.dbLabelName + "`" +
    							" FROM " + movie_table + " AS m " +
    							" JOIN movie_countries ON m.id = movie_countries.movie_id " +
    							" JOIN movie_languages ON m.id = movie_languages.movie_id " +
    							" JOIN movie_genres ON m.id = movie_genres.movie_id" +
    							" WHERE 1";
    		
    		// Placeholder insertion
        	for(MovieAttribute filter : filterSet){
        		if(		filter.dbLabelName.equals(MovieTitle.dbLabelName)
        				|| filter.dbLabelName.equals(MovieGenre.dbLabelName)
        				|| filter.dbLabelName.equals(MovieLanguage.dbLabelName)
        				|| filter.dbLabelName.equals(MovieCountry.dbLabelName)){
        			statement += (" AND "+filter.dbLabelName+" LIKE ? ");
        		}else{
        			statement += (" AND "+filter.dbLabelName+"= ? ");
        		}
        	}
        	
        	statement +=  " GROUP BY m.id";
        	
        	if(limit>0) statement += (" LIMIT "+limit);
        	if(limit>0 && offset>0)statement += (" OFFSET "+offset);
        	statement += ";";

        	pst = Database.getInstance().prepareStatement(statement);
        	
        	// Placeholder replace with actual filter
        	for(MovieAttribute filter : filterSet){
        			if(filter.dbLabelName.equals(MovieTitle.dbLabelName)
            				|| filter.dbLabelName.equals(MovieGenre.dbLabelName)
            				|| filter.dbLabelName.equals(MovieLanguage.dbLabelName)
            				|| filter.dbLabelName.equals(MovieCountry.dbLabelName)){
        				pst.setString(i++, "%"+filter.value+"%");
            		}else{
            			pst.setString(i++, filter.value);
            		}
        	}
        	
        	// Execution
        	rs = Database.getInstance().execute(pst);
        	
        	// Move results into movieCollection
        	while(rs.next()){
    	   		UnorderedSet<MovieLanguage> languages 	= new UnorderedSet<MovieLanguage>();
    	   		UnorderedSet<MovieCountry> countries 	= new UnorderedSet<MovieCountry>();
    	   		UnorderedSet<MovieGenre> genres 		= new UnorderedSet<MovieGenre>();

    	   		String[] strLanguages = rs.getString("movie_languages").split(",");
    	   		for (String language : strLanguages) {
        	   		languages.add(new MovieLanguage(language, language));
    	   		}
    	   		
    	   		String[] strCountries = rs.getString("movie_countries").split(",");
    	   		for (String country : strCountries) {
        	   		countries.add(new MovieCountry(country, country));
    	   		}
    	   		
    	   		String[] strGenres = rs.getString("movie_genres").split(",");
    	   		for (String genre : strGenres) {
        	   		genres.add(new MovieGenre(genre, genre));
    	   		}
    	   		
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
	 * @param offset (limit has to be > 0)
	 * @returns OrderedSet<MovieAttribute>
	 * @pre attribute != null
	 */
	@Override
	public Collection<MovieAttribute> getAttributeCollection(MovieAttribute attribute, int limit, int offset){
		Collection<MovieAttribute> attributeCollection 	= null;
		PreparedStatement pst							= null;
		ResultSet rs									= null;
		String statement 								= "";

    	try{
    		attributeCollection = new Collection<MovieAttribute>();
    		
    		if (attribute != null) {
				statement += reverseQueryStatements.get(attribute.dbLabelName);
				if (limit > 0)
					statement += (" LIMIT " + limit);
				if (limit > 0 && offset > 0)
					statement += (" OFFSET " + offset);
				statement += ";";
				pst = Database.getInstance().prepareStatement(statement);
				
				rs = Database.getInstance().execute(pst);
				switch (attribute.dbLabelName) {
					case MovieID.dbLabelName:
						while (rs.next()) {
							String id = rs.getString(MovieID.dbLabelName);
							attributeCollection.add(new MovieID((id)));
						}
						break;
	
					case MovieTitle.dbLabelName:
						while (rs.next()) {
							String title = rs.getString(MovieTitle.dbLabelName);
							attributeCollection.add(new MovieTitle(title));
						}
						break;
	
					case MovieYear.dbLabelName:
						while (rs.next()) {
							String year = rs.getString(MovieYear.dbLabelName);
							attributeCollection.add(new MovieYear(year));
						}
						break;
	
					case MovieLanguage.dbLabelName:
						while (rs.next()) {
							String lang = rs.getString(MovieLanguage.dbLabelName);
							attributeCollection.add(new MovieLanguage(lang, lang));
						}
						break;
	
					case MovieCountry.dbLabelName:
						while (rs.next()) {
							String country = rs.getString(MovieCountry.dbLabelName);
							attributeCollection.add(new MovieCountry(country, country));
						}
						break;
	
					case MovieDuration.dbLabelName:
						while (rs.next()) {
							String duration = rs.getString(MovieDuration.dbLabelName);
							attributeCollection.add(new MovieDuration(duration));
						}
						break;
	
					case MovieGenre.dbLabelName:
						while (rs.next()) {
							String genre = rs.getString(MovieGenre.dbLabelName);
							attributeCollection.add(new MovieGenre(genre, genre));
						}
						break;
						
				}
				rs.close();
				pst.close();
			}else{
				throw new NullPointerException("QueryServiceImpl.getAttributeSet: Passed attribute has not been initialized!");
			}
    	}catch(SQLException e){
    		e.printStackTrace();
    	}
    	
		return attributeCollection;
	}

	/*
	 * (non-Javadoc)
	 * @see we.are.bubblesort.MovieApp.client.QueryService#getWorldStatisticsModel(we.are.bubblesort.MovieApp.shared.UnorderedSet)
	 * @param filterSet Optional set filters
	 * @returns WorldStatisticsModel
	 */
	public WorldStatisticsModel getWorldStatisticsModel(UnorderedSet<MovieAttribute> filterSet){
		WorldStatisticsModel worldStats = null;
		PreparedStatement pst 			= null; 
		ResultSet rs 					= null;
		String statement 				= "";		
		int i							= 1;

		try{
			worldStats = new WorldStatisticsModel();
			statement += worldStatisticsModelCommandPre;
			
			if (filterSet != null) {
				// Insert Placeholders
				for (MovieAttribute filter : filterSet) {
					if (filter.dbLabelName.equals(MovieTitle.dbLabelName)) {
						statement += (" AND `movies`." + MovieTitle.dbLabelName + " LIKE ? ");
					} else {
						// this will break for some movieAttribute...
						// (as they are not in the movies-table necessarily)
						// a more sophisticated solution is desirable, but for sprint 1
						// we go with it
						statement += (" AND `movies`." + filter.dbLabelName + "= ? ");
					}
				} 
			}
			statement += worldStatisticsModelCommandPost;
			
			pst = Database.getInstance().prepareStatement(statement);
			
			if (filterSet != null) {
				// Replace Placeholders with actual filters
				for (MovieAttribute filter : filterSet) {
					if (filter.dbLabelName.equals(MovieTitle.dbLabelName)) {
						pst.setString(i++, "%" + filter.value + "%");
					} else {
						pst.setString(i++, filter.value);
					}
				} 
			}
			rs = Database.getInstance().execute(pst);

			while(rs.next()){
				String iso_alpha 	= rs.getString(WorldStatisticsModel.iso_alpha_DbLabelName);
				Integer n_movies 	= rs.getInt(WorldStatisticsModel.n_movies_DbLabelName);
				Float longitude 	= rs.getFloat(WorldStatisticsModel.longitude_DbLabelName);
				Float latitude		= rs.getFloat(WorldStatisticsModel.latitude_DbLabelName);
				worldStats.add(new WorldStatisticsModelEntry(iso_alpha,n_movies, latitude, longitude));
			}
			
			rs.close();
    		pst.close();
		}catch(SQLException e){
			e.printStackTrace();
		}

		return worldStats;
	}
}
