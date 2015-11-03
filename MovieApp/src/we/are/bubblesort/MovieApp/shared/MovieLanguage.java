package we.are.bubblesort.MovieApp.shared;

public class MovieLanguage extends MovieAttribute {
	
	public static final String dbLabelName = "movie_languages";
	public MovieLanguage(String value,String displayName){
		super(value,MovieLanguage.dbLabelName,displayName);
	}
}
