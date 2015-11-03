package we.are.bubblesort.MovieApp.shared;

public class MovieCountry extends MovieAttribute {

	public static final String dbLabelName = "movie_countries";
	
	public MovieCountry(){
			
	}

	public MovieCountry(String value,String displayName){
		super(value,MovieCountry.dbLabelName,displayName);
	}
}