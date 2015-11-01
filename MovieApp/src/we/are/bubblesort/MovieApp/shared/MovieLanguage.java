package we.are.bubblesort.MovieApp.shared;

public class MovieLanguage extends MovieAttribute {
	public static String dbLabelName = "movie_languages";
	MovieLanguage(String value,String displayName){
		super(value,MovieLanguage.dbLabelName,displayName);
	}
}
