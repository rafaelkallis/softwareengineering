package we.are.bubblesort.MovieApp.server;

import java.io.IOException;

import we.are.bubblesort.MovieApp.shared.Collection;

public class MovieImportDAO {
	String records[][];
	int n_movies;
	
	public MovieImportDAO(String content){
		try {
			String [][] temp_records = Parser.getInstance().parseTSV(content);
			this.n_movies = temp_records[0].length;
			this.records = new String[11][this.n_movies];
			
			this.records[1] 	= temp_records[0]; //WikipediaIDs
			this.records[2] 	= temp_records[1]; //FreebaseId
			this.records[3] 	= temp_records[2]; //Title
			this.records[4] 	= temp_records[3]; //Date
			this.records[5] 	= temp_records[4]; //Year
			this.records[6] 	= temp_records[5]; //Revenue
			this.records[7] 	= temp_records[6]; //Duration
			this.records[8] 	= temp_records[7]; //Languages
			this.records[9] 	= temp_records[8]; //Countries
			this.records[10] 	= temp_records[9]; //Genres
		} catch (IOException e){
			e.printStackTrace();
			n_movies = 0;
			records = null;
		}
	}
	
	public MovieImportDAO(String records[][], int n_movies){
		this.records = records;
		this.n_movies = n_movies;
	}
	
	/*
	 * Distributes the content throughout many movieImportDAOs, depending on movies_per_object
	 * @param content
	 * @param movies_per_object
	 * @returns MovieImportDAO[]
	 * @pre content is '\t' separated
	 */
	public static MovieImportDAO[] shuffle(String content, int movies_per_object){
		try {
			String [][] all_records = Parser.getInstance().parseTSV(content);
			int n_all_records = all_records[0].length;
			Collection<MovieImportDAO> movie_import_dao_collection = new Collection<MovieImportDAO>();
			
			//add movies to object(s)
			for(int i = 0; i< (n_all_records / movies_per_object); i++){
				String[][] new_records = new String[11][movies_per_object];
				for(int movie_idx = 0; movie_idx < movies_per_object; movie_idx++){
					new_records[1][movie_idx] 	= all_records[0][movie_idx+(movies_per_object*i)];
					new_records[2][movie_idx] 	= all_records[1][movie_idx+(movies_per_object*i)];
					new_records[3][movie_idx] 	= all_records[2][movie_idx+(movies_per_object*i)];
					new_records[4][movie_idx] 	= all_records[3][movie_idx+(movies_per_object*i)];
					new_records[5][movie_idx] 	= all_records[4][movie_idx+(movies_per_object*i)];
					new_records[6][movie_idx] 	= all_records[5][movie_idx+(movies_per_object*i)];
					new_records[7][movie_idx] 	= all_records[6][movie_idx+(movies_per_object*i)]; 
					new_records[8][movie_idx] 	= all_records[7][movie_idx+(movies_per_object*i)];
					new_records[9][movie_idx] 	= all_records[8][movie_idx+(movies_per_object*i)];
					new_records[10][movie_idx] 	= all_records[9][movie_idx+(movies_per_object*i)];
				}
				movie_import_dao_collection.add(new MovieImportDAO(new_records,movies_per_object));
			}
			
			//add leftover movies to object
			if(n_all_records % movies_per_object != 0){
				int n_leftover_movies = n_all_records % movies_per_object;
				String[][] new_records = new String[11][n_leftover_movies];
				for(int new_movie_idx = 0, movie_idx = n_all_records - n_leftover_movies;movie_idx < n_all_records;new_movie_idx++, movie_idx++){
					new_records[1][new_movie_idx] 	= all_records[0][movie_idx];
					new_records[2][new_movie_idx] 	= all_records[1][movie_idx];
					new_records[3][new_movie_idx] 	= all_records[2][movie_idx];
					new_records[4][new_movie_idx] 	= all_records[3][movie_idx];
					new_records[5][new_movie_idx] 	= all_records[4][movie_idx];
					new_records[6][new_movie_idx] 	= all_records[5][movie_idx];
					new_records[7][new_movie_idx] 	= all_records[6][movie_idx]; 
					new_records[8][new_movie_idx] 	= all_records[7][movie_idx];
					new_records[9][new_movie_idx] 	= all_records[8][movie_idx];
					new_records[10][new_movie_idx] 	= all_records[9][movie_idx];
				}
				movie_import_dao_collection.add(new MovieImportDAO(new_records,n_leftover_movies));
			}
			
			return movie_import_dao_collection.toArray(new MovieImportDAO [movie_import_dao_collection.size()]);
		} catch (IOException e){
			e.printStackTrace();
			return null;
		}
	}
	
	/*
	 * @pre records.length == this.getNMovies()
	 */
	public void setMovieIDs(String[] records){
		this.records[0] = records;
	}
	
	/*
	 * @returns String[]
	 */
	public String[] getIDs(){
		return records[0];
	}
	
	/*
	 * @returns String[]
	 */
	public String[] getWikipediaIds(){
		return records[1];
	}
	
	/*
	 * @returns String[]
	 */
	public String[] getFreebaseIds(){
		return records[2];
	}
	
	/*
	 * @returns String[]
	 */
	public String[] getTitles(){
		return records[3];
	}
	
	/*
	 * @returns String[]
	 */
	public String[] getDates(){
		return records[4];
	}
	
	/*
	 * @returns String[]
	 */
	public String[] getYears(){
		return records[5];
	}
	
	/*
	 * @returns String[]
	 */
	public String[] getRevenues(){
		return records[6];
	}
	
	/*
	 * @returns String[]
	 */
	public String[] getDurations(){
		return records[7];
	}
	
	/*
	 * @returns String[]
	 */
	public String[] getLanguages(){
		return records[8];
	}
	
	/*
	 * @returns String[]
	 */
	public String[] getCountries(){
		return records[9];
	}
		
	/*
	 * @returns String[]
	 */
	public String[] getGenres(){
		return records[10];
	}
	
	/*
	 * @returns int
	 */
	public int getNMovies(){
		return this.n_movies;
	}
}