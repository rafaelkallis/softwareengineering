package we.are.bubblesort.MovieApp.shared;

public class MovieCountry extends MovieAttribute {

	private static final long serialVersionUID = 5702587147357108866L;
	public static final String dbLabelName = "movie_countries";
	public MovieCountry(String value,String displayName){
		super(value,MovieCountry.dbLabelName,displayName);
	}
}