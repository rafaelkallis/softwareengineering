package we.are.bubblesort.MovieApp.shared;

import java.io.IOException;

import org.apache.commons.csv.CSVFormat;

public class MovieImportDAO {
	String records[][];
	int n_movies;
	public MovieImportDAO(String content,CSVFormat format) throws IOException{
		String [][] temp_records = Parser.getInstance().parseFormat(content, format);
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
	}
	
	/*
	 * @pre records.length == this.getNMovies()
	 */
	public void setMovieIDs(String[] records){
		this.records[0] = records;
	}
	
	public String[] getIDs(){
		return records[0];
	}
	
	public String[] getWikipediaIds(){
		return records[1];
	}
	
	public String[] getFreebaseIds(){
		return records[2];
	}
	
	public String[] getTitles(){
		return records[3];
	}
	
	public String[] getDates(){
		return records[4];
	}
	
	public String[] getYears(){
		return records[5];
	}
	
	public String[] getRevenues(){
		return records[6];
	}
	
	public String[] getDurations(){
		return records[7];
	}
	
	public String[] getLanguages(){
		return records[8];
	}
	
	public String[] getCountries(){
		return records[9];
	}
		
	public String[] getGenres(){
		return records[10];
	}
	
	public int getNMovies(){
		return this.n_movies;
	}
}