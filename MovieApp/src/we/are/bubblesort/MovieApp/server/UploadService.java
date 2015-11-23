package we.are.bubblesort.MovieApp.server;

import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.csv.CSVFormat;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import we.are.bubblesort.MovieApp.shared.*;
import com.google.appengine.api.blobstore.BlobKey;
import com.google.appengine.api.blobstore.BlobstoreInputStream;
import com.google.appengine.api.blobstore.BlobstoreService;
import com.google.appengine.api.blobstore.BlobstoreServiceFactory;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * Created by rafael on 17/11/15.
 */

public class UploadService extends HttpServlet {

	private static final long serialVersionUID = 3346772105950555818L;
	
	private BlobstoreService blobstoreService = BlobstoreServiceFactory.getBlobstoreService();
	
	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{
		String line = null;
		Map<String, List<BlobKey>> blobs = blobstoreService.getUploads(request);
        List<BlobKey> blobKeyList = blobs.get("importCSV");
        for(BlobKey blobKey : blobKeyList){
        	if(blobKey == null){
        		response.sendRedirect("/");
        	}else{       		
        		this.importContent(getContent(blobKey));      		
        		response.sendRedirect("/upload-success?blob-key=" + blobKey.getKeyString());
        	}
        }
	}
	
	public String getContent(BlobKey blobKey) throws IOException{
		String line;
		StringBuilder sb = new StringBuilder();
		BufferedReader br =new BufferedReader(new InputStreamReader(new BlobstoreInputStream(blobKey)));
		while(!(line = br.readLine()).isEmpty()){
			sb.append(line+"\n");
		}
		br.close();
		return sb.toString();
	}
	/*
	 * @param content
	 */
	public void importContent(String content){
		try {
			MovieImportDAO movieImportDAO = new MovieImportDAO(content,CSVFormat.TDF);
			{
				PreparedStatement pst = makeMovieInsertStatement(movieImportDAO);
				//pst.executeUpdate();
				addIDsToMovieImportDAO(pst.getGeneratedKeys(), movieImportDAO);
			}
			{
				PreparedStatement pst = makeLanguagesInsertStatement(movieImportDAO);
				//pst.executeUpdate();
			}
			{
				
				PreparedStatement pst = makeCountriesInsertStatement(movieImportDAO);
				//pst.executeUpdate();
			}
			{
				
				PreparedStatement pst = makeGenresInsertStatement(movieImportDAO);
				//pst.executeUpdate();
			} 
		} catch (SQLException e) {
			e.printStackTrace();
		}catch (IOException e) {
			e.printStackTrace();
		}

	}
	
	public PreparedStatement makeLanguagesInsertStatement(MovieImportDAO movieImportDAO) throws SQLException{
		return makeSplittedInsertStatement("movie_languages",MovieLanguage.dbLabelName,movieImportDAO);
	}
	
	public PreparedStatement makeCountriesInsertStatement(MovieImportDAO movieImportDAO) throws SQLException{
		return makeSplittedInsertStatement("movie_countries",MovieCountry.dbLabelName,movieImportDAO);
	}
	
	public PreparedStatement makeGenresInsertStatement(MovieImportDAO movieImportDAO) throws SQLException{
		return makeSplittedInsertStatement("movie_genres",MovieGenre.dbLabelName,movieImportDAO);
	}
	
	private PreparedStatement makeSplittedInsertStatement(String tableName,String dbLabelName,MovieImportDAO movieImportDAO) throws SQLException{
		String[] ids = movieImportDAO.getIDs();
		String[] attributes = movieImportDAO.getAttributes(dbLabelName);
		int placeholderCounter = 0;
		
		//find out how many placeholders are needed
		for(int idx = ids.length; idx-- > 0;){
			if(!attributes[idx].equals("")){
				placeholderCounter += attributes[idx].split(", ",-1).length;				
			}
		}
		
		String sql = "INSERT INTO `"+tableName+"` (?,?) VALUES "+placeholderMaker(2,placeholderCounter)+";";
		PreparedStatement pst = Database.getInstance().prepareStatement(sql);
		
		pst.setString(1, MovieID.dbLabelName);
		pst.setString(2, dbLabelName);
		
		int placeholder_idx = 3;
		for(int idx = 0; idx < ids.length; idx++){
			for(String attribute : attributes[idx].split(", ", -1)){
				if(!attribute.equals("")){
					pst.setString(placeholder_idx++,ids[idx]);
					pst.setString(placeholder_idx++, attribute);					
				}
			}
		}
		
		return pst;
	}
    
	/*
	 * @param movieImportDAO
	 * @returns PreparedStatement
	 */
    public PreparedStatement makeMovieInsertStatement(MovieImportDAO movieImportDAO) throws SQLException{
       	int n_movies			= movieImportDAO.getNMovies();
    	String sql 				= "INSERT INTO `movies` (?,?,?,?,?,?,?) VALUES "+placeholderMaker(7, n_movies)+";";
    	PreparedStatement pst	= Database.getInstance().prepareStatement(sql,Statement.RETURN_GENERATED_KEYS);
    	String[] titles 		= movieImportDAO.getTitles();
    	String[] years 			= movieImportDAO.getYears();
    	String[] revenues 		= movieImportDAO.getRevenues();
    	String[] durations 		= movieImportDAO.getDurations();
    	String[] languages 		= movieImportDAO.getLanguages();
    	String[] countries		= movieImportDAO.getCountries();
    	String[] genres 		= movieImportDAO.getGenres();
    	
    	pst.setString		(1, MovieTitle.dbLabelName);
    	pst.setString		(2, MovieYear.dbLabelName);
    	pst.setString		(3, MovieRevenue.dbLabelName);
    	pst.setString		(4, MovieDuration.dbLabelName);
    	pst.setString		(5, MovieLanguage.dbLabelName);
    	pst.setString		(6, MovieCountry.dbLabelName);
    	pst.setString		(7, MovieGenre.dbLabelName);
    	
    	for(int idx = 0; idx < n_movies; idx++){
    		//title
    		pst.setString((idx+1)*7+1, titles[idx]);
    		
    		//year
    		if(years[idx] == null || years[idx].equals("")){
    			pst.setNull((idx+1)*7+2, java.sql.Types.INTEGER);
    		}else{
    			pst.setInt((idx+1)*7+2, Integer.parseInt(years[idx]));
    		}
    		
    		//revenue
    		if(revenues[idx] == null || revenues[idx].equals("")){
				pst.setNull((idx+1)*7+3, java.sql.Types.INTEGER);
			}else{
				pst.setInt((idx+1)*7+3, Integer.parseInt(revenues[idx]));	
			}
    		
    		//duration
    		if(durations[idx] == null || durations[idx].equals("")){
				pst.setNull((idx+1)*7+4, java.sql.Types.FLOAT);
			}else{
				pst.setFloat((idx+1)*7+4, Float.parseFloat(durations[idx]));	
			}
    		
    		//languages
    		if(languages[idx] == null || languages[idx].equals("")){
				pst.setNull((idx+1)*7+5, java.sql.Types.VARCHAR);
			}else{
				pst.setString((idx+1)*7+5, languages[idx]);
			}
    		
    		//countries
    		if(countries[idx] == null || countries[idx].equals("")){
				pst.setNull((idx+1)*7+6, java.sql.Types.VARCHAR);
			}else{
				pst.setString((idx+1)*7+6, countries[idx]);
			}
    		
    		//genres
    		if(genres[idx] == null || genres[idx].equals("")){
				pst.setNull((idx+1)*7+7, java.sql.Types.VARCHAR);
			}else{
				pst.setString((idx+1)*7+7, genres[idx]);
			}
    	}
    	
    	return pst;
    }

    /*
     * @param placeholders_per_line
     * @param n_lines
     * @returns String
     * @pre placeholders_per_line > 0 && n_lines > 0
     * 
     * (7,3) -> (?,?,?,?,?,?,?),(?,?,?,?,?,?,?),(?,?,?,?,?,?,?)
     * (2,1) -> (?,?)
     * (3,3) -> (?,?,?),(?,?,?),(?,?,?)
     */
    private String placeholderMaker(int placeholders_per_line, int n_lines){
    	Collection<String> placeholderMake = new Collection<String>(placeholders_per_line);
    	while(placeholders_per_line-- > 0){
    		placeholderMake.add("?");
    	}
    	String line = "("+placeholderMake.toJoinedString(",")+")";
    	placeholderMake.clear();
    	while(n_lines -- > 0){
    		placeholderMake.add(line);
    	}
    	return placeholderMake.toJoinedString(",");
    }

    /*
     * @pre rs.size == movieImportDAO.getNMovies()
     */
    private void addIDsToMovieImportDAO(ResultSet rs, MovieImportDAO movieImportDAO) throws SQLException{
    	String[] ids = new String[movieImportDAO.getNMovies()];
    	for(int idx = 0; idx < movieImportDAO.getNMovies(); idx++){
    		ids[idx] = rs.getString(idx);
    	}
    	movieImportDAO.setMovieIDs(ids);
    }
}
