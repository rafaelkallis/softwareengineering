package we.are.bubblesort.MovieApp.shared;

public class MovieLanguage extends MovieAttribute {
	public static final String dbLabelName = "movie_languages";
	public MovieLanguage(String value){
		super(value,MovieLanguage.dbLabelName);
	}
}
