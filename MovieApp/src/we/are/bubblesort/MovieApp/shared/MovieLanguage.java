package we.are.bubblesort.MovieApp.shared;

public class MovieLanguage extends MovieAttribute {
	
	private static final long serialVersionUID = 8108860899158551157L;
	public static final String dbLabelName = "movie_languages";
	public MovieLanguage(String value,String displayName){
		super(value,MovieLanguage.dbLabelName,displayName);
	}
}
