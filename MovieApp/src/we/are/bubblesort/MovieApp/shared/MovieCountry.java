package we.are.bubblesort.MovieApp.shared;

public class MovieCountry extends MovieAttribute {
	public static String dbLabelName = "movie_countries";
	MovieCountry(String value,String displayName){
		super(value,MovieCountry.dbLabelName,displayName);
	}
}