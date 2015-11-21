package we.are.bubblesort.MovieApp.server;

import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import we.are.bubblesort.MovieApp.shared.*;
import com.google.appengine.api.blobstore.BlobKey;
import com.google.appengine.api.blobstore.BlobstoreInputStream;
import com.google.appengine.api.blobstore.BlobstoreService;
import com.google.appengine.api.blobstore.BlobstoreServiceFactory;
import java.sql.PreparedStatement;
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
        		BufferedReader br =new BufferedReader(new InputStreamReader(new BlobstoreInputStream(blobKey)));
        		while((line = br.readLine()) != null){
        			try {
						String[] records = Parser.getInstance().parseCSV(line);
						String movie_id	= null;
						
						{
							String[] dbLabelNames 	= {MovieTitle.dbLabelName,MovieYear.dbLabelName,MovieRevenue.dbLabelName,MovieDuration.dbLabelName,MovieLanguage.dbLabelName,MovieCountry.dbLabelName,MovieGenre.dbLabelName};
							String[] values 		= records;
						    PreparedStatement pst 	= makeInsertStatement(dbLabelNames,values,"movies");
						    //pst.executeUpdate();
						    //ResultSet rs = pst.getGeneratedKeys();
						    //movie_id = rs.getString(1);
						}
						{
							String languages[] 		= records[4].split(", ");
							String dbLabelNames[] 	= {MovieID.dbLabelName,MovieLanguage.dbLabelName};
							for(String language: languages){
								String values[] 		= {movie_id,language};
								PreparedStatement pst 	= makeInsertStatement(dbLabelNames,values,"movie_languages");
							    //pst.executeUpdate();
							}
						}
						{
							String countries[] 		= records[5].split(", ");
							String dbLabelNames[] 	= {MovieID.dbLabelName,MovieCountry.dbLabelName};
							for(String country: countries){
								String values[] 		= {movie_id,country};
								PreparedStatement pst 	= makeInsertStatement(dbLabelNames,values,"movie_countries");
							    //pst.executeUpdate();
							}
						}  
						{
							String genres[] 		= records[6].split(", ");
							String dbLabelNames[] 	= {MovieID.dbLabelName,MovieGenre.dbLabelName};
							for(String genre: genres){
								String values[] 		= {movie_id,genre};
								PreparedStatement pst 	= makeInsertStatement(dbLabelNames,values,"movie_genres");
							    //pst.executeUpdate();
							}
						}
					} catch (SQLException e) {
						e.printStackTrace();
					}
        		}
        		br.close();
        		response.sendRedirect("/upload-success?blob-key=" + blobKey.getKeyString());
        	}
        }
	}
    
    /*
     * @pre headers.length == fields.length
     * @param dbLabelNames[] array of all database column labels (headers)
     * @param fields[] array of values to be inserted
     * @param tableName the name of the table for the values to be inserted
     * @returns PreparedStatement the sanitized preparedStatement ready for execution
     */
    public PreparedStatement makeInsertStatement(String dbLabelNames[],String[] values,String tableName) throws SQLException{
    	int length 						= dbLabelNames.length;
    	String sql 						= "INSERT INTO `"+tableName+"` ";
    	Collection<String> placeHolders = new Collection<String>(length);
    	PreparedStatement pst			= null;
    	
    	for(int idx = length; idx >0;idx--){
    		placeHolders.add("?");
    	}
    	
    	sql += "("+placeHolders.toJoinedString(",")+") VALUES ("+placeHolders.toJoinedString(",")+");";
    	
    	pst = Database.getInstance().prepareStatement(sql,Statement.RETURN_GENERATED_KEYS);
    	
    	for(int idx =0; idx < length; idx++){
    		pst.setString		(idx+1, dbLabelNames[idx]);
    			
    		switch(dbLabelNames[idx]){
	    		case MovieID.dbLabelName:
	    			pst.setInt		(idx+1+length, Integer.parseInt(values[idx]));
	    			break;
	    			
	    		case MovieTitle.dbLabelName:
	    			pst.setString	(idx+1+length, values[idx]);
	    			break;
	    			
	    		case MovieYear.dbLabelName:
	    			if(values[idx] == ""){
	    				pst.setNull		(idx+1+length, java.sql.Types.INTEGER);
	    			}else{
	    				pst.setInt		(idx+1+length, Integer.parseInt(values[idx]));
	    			}
	    			break;
	    			
	    		case MovieRevenue.dbLabelName:
	    			if(values[idx] == ""){
	    				pst.setNull		(idx+1+length, java.sql.Types.INTEGER);
	    			}else{
	    				pst.setInt		(idx+1+length, Integer.parseInt(values[idx]));
	    			}
	    			break;
	    			
	    		case MovieDuration.dbLabelName:
	    			if(values[idx] == ""){
	    				pst.setNull		(idx+1+length, java.sql.Types.FLOAT);
	    			}else{
	    				pst.setFloat	(idx+1+length, Float.parseFloat(values[idx]));
	    			}
	    			break;
	    			
	    		case MovieLanguage.dbLabelName:
	    			if(values[idx] == ""){
	    				pst.setNull		(idx+1+length, java.sql.Types.VARCHAR);//TODO check if this is an potential bug
	    			}else{
	    				pst.setString	(idx+1+length, values[idx]);
	    			}
	    			break;
	    			
	    		case MovieCountry.dbLabelName:
	    			if(values[idx] == ""){
	    				pst.setNull		(idx+1+length, java.sql.Types.VARCHAR);//TODO check if this is an potential bug
	    			}else{
	    				pst.setString	(idx+1+length, values[idx]);
	    			}
	    			break;
	    			
	    		case MovieGenre.dbLabelName:
	    			if(values[idx] == ""){
	    				pst.setNull		(idx+1+length, java.sql.Types.VARCHAR);//TODO check if this is an potential bug
	    			}else{
	    				pst.setString	(idx+1+length, values[idx]);
	    			}
	    			break;
    		}
    	}
    	return pst;
    }
}
