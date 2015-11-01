package we.are.bubblesort.MovieApp.shared;

public class MovieLanguage extends MovieAttribute {
	public static String dbLabelName = "movie_languages";
	MovieLanguage(String value){
		super(value,MovieLanguage.dbLabelName);
	}
}
