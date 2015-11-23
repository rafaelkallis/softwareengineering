package we.are.bubblesort.MovieApp.shared;

import java.io.IOException;

import org.apache.commons.csv.CSVFormat;

public class MovieImportDAO {
	String records[][];
	
	public MovieImportDAO(String content,CSVFormat format) throws IOException{
		String[][] temp_records = Parser.getInstance().parseFormat(content, format);
		this.records = new String[8][temp_records[0].length];
		this.records[1] = temp_records[0];
		this.records[2] = temp_records[1];
		this.records[3] = temp_records[2];
		this.records[4] = temp_records[3];
		this.records[5] = temp_records[4];
		this.records[6] = temp_records[5];
		this.records[7] = temp_records[6];
	}
	
	/*
	 * @pre records.length == 8
	 */
	public MovieImportDAO(String[][] records){
		this.records = records;
	}
	
	/*
	 * @pre records.length == this.getNMovies()
	 */
	public void setMovieIDs(String[] records){
		this.records[0] = records;
	}
	
	public String[][] getRecords(){
		return records;
	}
	
	public String[] getIDs(){
		return records[0];
	}
	
	public String[] getTitles(){
		return records[1];
	}
	
	public String[] getYears(){
		return records[2];
	}
	
	public String[] getRevenues(){
		return records[3];
	}
	
	public String[] getDurations(){
		return records[4];
	}
	
	public String[] getLanguages(){
		return records[5];
	}
	
	public String[] getSplittedLanguages(int movie_idx){
		return records[5][movie_idx].split(", ",-1);
	}
	
	public String[] getCountries(){
		return records[6];
	}
	
	public String[] getSplittedCountries(int movie_idx){
		return records[5][movie_idx].split(", ",-1);
	}
		
	public String[] getGenres(){
		return records[7];
	}
	
	public int getNMovies(){
		return records[0].length;
	}
	
	public String[] getAttributes(String dbLabelName){
		switch(dbLabelName){
			case MovieID.dbLabelName:
				return this.getIDs();
			case MovieTitle.dbLabelName:
				return this.getTitles();
			case MovieYear.dbLabelName:
				return this.getYears();
			case MovieRevenue.dbLabelName:
				return this.getRevenues();
			case MovieDuration.dbLabelName:
				return this.getDurations();
			case MovieLanguage.dbLabelName:
				return this.getLanguages();
			case MovieCountry.dbLabelName:
				return this.getCountries();
			case MovieGenre.dbLabelName:
				return this.getGenres();
			default:
				return null;
		}
	}
}