package we.are.bubblesort.MovieApp.shared;

public class MovieLanguage extends MovieAttribute {
	
	public static final String dbLabelName = "movie_languages";
	public static final String urlName		= dbLabelName;
	
	public MovieLanguage(){
		super(null,MovieLanguage.dbLabelName,MovieLanguage.urlName,null);
	}
	
	public MovieLanguage(String value,String displayName){
		super(value,MovieLanguage.dbLabelName,MovieLanguage.urlName,displayName);
	}
}
