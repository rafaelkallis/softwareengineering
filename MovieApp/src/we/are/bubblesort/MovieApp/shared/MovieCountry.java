package we.are.bubblesort.MovieApp.shared;

public class MovieCountry extends MovieAttribute {

	public static final String dbLabelName 	= "movie_countries";
	public static final String urlName		=  dbLabelName;
	public MovieCountry(){
		super(null,MovieCountry.dbLabelName,MovieCountry.urlName,null);
	}

	public MovieCountry(String value,String displayName){
		super(value,MovieCountry.dbLabelName,MovieCountry.urlName,displayName);
	}
}