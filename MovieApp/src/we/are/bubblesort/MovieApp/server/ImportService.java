package we.are.bubblesort.MovieApp.server;

import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
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

public class ImportService extends HttpServlet {

	private static final long serialVersionUID 	= 3346772105950555818L;
	private static final int MOVIES_PER_QUERY 	= 6000;
	private BlobstoreService blobstoreService 	= BlobstoreServiceFactory.getBlobstoreService();
	private Database db 						= Database.getInstance();	
	
	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{
		Map<String, List<BlobKey>> blobs = blobstoreService.getUploads(request);
        List<BlobKey> blobKeyList = blobs.get("importCSV");
		response.setContentType("text/html");
		
        for(BlobKey blobKey : blobKeyList){
        	if(blobKey == null){
        		response.getWriter().write("error: upload failed");
        	}else{       		
        		try {
					this.importContent(this.getContent(blobKey));
					response.getWriter().write("success");
				} catch (ImportFormatException e) {
					response.getWriter().write("error: "+e.getMessage());
				}      		
        		
        	}
        }
	}
	
	/*
	 * Abused to send uploadUrl 
	 */
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
		BlobstoreService blobstoreService = BlobstoreServiceFactory.getBlobstoreService();
        String uploadUrl = blobstoreService.createUploadUrl("/import");
        
		OutputStream o = response.getOutputStream();
		o.write((uploadUrl).getBytes());
		o.flush();
    }
	
	/*
	 * @param blobKey the BlobKey from BlobstoreService
	 * @returns String the content of the BlobKey
	 */
	private String getContent(BlobKey blobKey){
		String line			= null;
		StringBuilder sb 	= new StringBuilder();
		BufferedReader br 	= null;
		try {
			try {
				br = new BufferedReader(new InputStreamReader(new BlobstoreInputStream(blobKey)));
				while((line = br.readLine())!=null){
					sb.append(line+"\n");
				}
			} finally {
				br.close();
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return sb.toString();
	}
	
	/*
	 * @param content the content to be imported to the DB
	 * @param format [CSV,Excel,TSV, ..]
	 */
	public void importContent(String content) throws ImportFormatException, IOException{
		for(MovieImportDAO importDAO : MovieImportDAO.shuffle(content, MOVIES_PER_QUERY)){			
			this.import_movies(importDAO);
			this.import_languages(importDAO);
			this.import_countries(importDAO);
			this.import_genres(importDAO);
		}			
	}

	/*
	 * @param movieImportDAO the object that contains the extracted information
	 * @pre movieImportDAO doesn't have any IDs
	 * @post movieImportDAO has IDs
	 */
	public void import_movies(MovieImportDAO movieImportDAO) {
		int n_movies			= movieImportDAO.getNMovies();
		String sql 				= "INSERT INTO `movies` (`wikipedia_movie_id`,`freebase_movie_id`,`movie_name`,`movie_release_date`,`movie_release_year`,`movie_box_office_revenue`,`movie_runtime`,`movie_languages`,`movie_countries`,`movie_genres`) VALUES "+placeholderMaker(10, n_movies)+";";
		PreparedStatement pst	= null;
		String[] wikipedia_ids	= movieImportDAO.getWikipediaIds();
		String[] freebase_ids	= movieImportDAO.getFreebaseIds();
		String[] titles 		= movieImportDAO.getTitles();
		String[] dates			= movieImportDAO.getDates();
		String[] years 			= movieImportDAO.getYears();
		String[] revenues 		= movieImportDAO.getRevenues();
		String[] durations 		= movieImportDAO.getDurations();
		String[] languages 		= movieImportDAO.getLanguages();
		String[] countries		= movieImportDAO.getCountries();
		String[] genres 		= movieImportDAO.getGenres();
		
		try {
			try {
				pst = db.getNewConnection().prepareStatement(sql,Statement.RETURN_GENERATED_KEYS);
				for(int idx = 0; idx < n_movies; idx++){
					
					//wikipedia id
					if(wikipedia_ids[idx] == null || wikipedia_ids[idx].equals("")){
						pst.setNull((idx)*10+1, java.sql.Types.INTEGER);
					}else{
						pst.setInt((idx)*10+1, Integer.parseInt(wikipedia_ids[idx]));
					}
					
					//freebase id
					if(freebase_ids[idx] == null || freebase_ids[idx].equals("")){
						pst.setNull((idx)*10+2, java.sql.Types.VARCHAR);
					}else{
						pst.setString((idx)*10+2, freebase_ids[idx]);
					}
					
					//title
					pst.setString((idx)*10+3, titles[idx]);
					
					//date
					if(dates[idx] == null || dates[idx].equals("")){
						pst.setNull((idx)*10+4, java.sql.Types.VARCHAR);
					}else{
						pst.setString((idx)*10+4, dates[idx]);
					}
					
					//year
					if(years[idx] == null || years[idx].equals("")){
						pst.setNull((idx)*10+5, java.sql.Types.INTEGER);
					}else{
						pst.setInt((idx)*10+5, Integer.parseInt(years[idx]));
					}
					
					//revenue
					if(revenues[idx] == null || revenues[idx].equals("")){
						pst.setNull((idx)*10+6, java.sql.Types.BIGINT);
					}else{
						pst.setLong((idx)*10+6, Long.parseLong(revenues[idx]));
						
					}
					
					//duration
					if(durations[idx] == null || durations[idx].equals("")){
						pst.setNull((idx)*10+7, java.sql.Types.FLOAT);
					}else{
						pst.setFloat((idx)*10+7, Float.parseFloat(durations[idx]));	
					}
					
					//languages
					if(languages[idx] == null || languages[idx].equals("")){
						pst.setNull((idx)*10+8, java.sql.Types.VARCHAR);
					}else{
						pst.setString((idx)*10+8, languages[idx]);
					}
					
					//countries
					if(countries[idx] == null || countries[idx].equals("")){
						pst.setNull((idx)*10+9, java.sql.Types.VARCHAR);
					}else{
						pst.setString((idx)*10+9, countries[idx]);
					}
					
					//genres
					if(genres[idx] == null || genres[idx].equals("")){
						pst.setNull((idx)*10+10, java.sql.Types.VARCHAR);
					}else{
						pst.setString((idx)*10+10, genres[idx]);
					}
				}
				
				pst.executeUpdate();
				
				ResultSet generated_ids = pst.getGeneratedKeys();
				movieImportDAO.setMovieIDs(extractIDs(generated_ids));
				
			} finally {
				pst.getConnection().close();
			}
		} catch (SQLException e){
			e.printStackTrace();
		} 	
	}
	
	/*
	 * @param movieImportDAO the object that contains the extracted information
	 * @pre IDs already added to movieImportDAO
	 */
	public void import_languages(MovieImportDAO movieImportDAO){
		PreparedStatement pst = null;
		String[] ids = movieImportDAO.getIDs();
		String[] languages = movieImportDAO.getLanguages();
		int placeholderCounter = 0;
		try {
			try {
				//find out how many placeholders are needed
				for(int idx = ids.length; idx-- > 0;){
					if(!languages[idx].equals("")){
						placeholderCounter += languages[idx].split(", ",-1).length;				
					}
				}
				
				String sql = "INSERT INTO `movie_languages` (`movie_id`,`language`) VALUES "+placeholderMaker(2,placeholderCounter)+";";
				pst = db.getNewConnection().prepareStatement(sql);
				
				for(int idx = 0, placeholder_count = 1; idx < ids.length; idx++){
					for(String language : languages[idx].split(", ", -1)){
						if(!language.equals("")){
							pst.setString(placeholder_count++,ids[idx]);
							pst.setString(placeholder_count++, language);					
						}
					}
				}
				
				pst.executeUpdate();
			} finally {
				pst.getConnection().close();
			}
		} catch (SQLException e){
			e.printStackTrace();
		}
	}
	
	/*
	 * @param movieImportDAO the object that contains the extracted information
	 * @pre IDs already added to movieImportDAO
	 */
	public void import_countries(MovieImportDAO movieImportDAO) {
		PreparedStatement pst = null;
		String[] ids = movieImportDAO.getIDs();
		String[] countries = movieImportDAO.getCountries();
		int placeholderCounter = 0;
		try {
			try {
				//find out how many placeholders are needed
				for(int idx = ids.length; idx-- > 0;){
					if(!countries[idx].equals("")){
						placeholderCounter += countries[idx].split(", ",-1).length;				
					}
				}
				
				String sql = "INSERT INTO `movie_countries` (`movie_id`,`movie_country`) VALUES "+placeholderMaker(2,placeholderCounter)+";";
				pst = db.getNewConnection().prepareStatement(sql);
				
				for(int idx = 0, placeholder_count = 1; idx < ids.length; idx++){
					for(String country : countries[idx].split(", ", -1)){
						if(!country.equals("")){
							pst.setString(placeholder_count++,ids[idx]);
							pst.setString(placeholder_count++, country);					
						}
					}
				}
				
				pst.executeUpdate();
			} finally {
				pst.getConnection().close();
			}
		} catch (SQLException e){
			e.printStackTrace();
		}
	}
	
	/*
	 * @param movieImportDAO the object that contains the extracted information
	 * @pre IDs already added to movieImportDAO
	 */
	public void import_genres(MovieImportDAO movieImportDAO){
		PreparedStatement pst = null;
		String[] ids = movieImportDAO.getIDs();
		String[] genres = movieImportDAO.getGenres();
		int placeholderCounter = 0;
		try {
			try {
				//find out how many placeholders are needed
				for(int idx = ids.length; idx-- > 0;){
					if(!genres[idx].equals("")){
						placeholderCounter += genres[idx].split(", ",-1).length;				
					}
				}
				
				String sql = "INSERT INTO `movie_genres` (`movie_id`,`genre`) VALUES "+placeholderMaker(2,placeholderCounter)+";";
				pst = db.getNewConnection().prepareStatement(sql);
				
				for(int idx = 0, placeholder_count = 1; idx < ids.length; idx++){
					for(String genre : genres[idx].split(", ", -1)){
						if(!genre.equals("")){
							pst.setString(placeholder_count++,ids[idx]);
							pst.setString(placeholder_count++, genre);					
						}
					}
				}
				
				pst.executeUpdate();
			} finally {
				pst.getConnection().close();
			}
		} catch (SQLException e){
			e.printStackTrace();
		}
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
     * @post rs remains open
     * @param rs
     * @returns String[]
     */
    private String[] extractIDs(ResultSet rs){
    	try {
    		Collection<String> id_list = new Collection<String>();
    		int size = 0;
    		while(rs.next()){
    			id_list.add(Integer.toString(rs.getInt(1)));
    			size++;
    		}
			return id_list.toArray(new String[size]);
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		}
    }
}
