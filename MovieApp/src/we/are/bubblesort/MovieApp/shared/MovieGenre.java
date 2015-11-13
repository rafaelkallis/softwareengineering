package we.are.bubblesort.MovieApp.shared;

public class MovieGenre extends MovieAttribute {
	public static final String dbLabelName = "movie_genres";
	public static final String urlName		= dbLabelName;
	
	public MovieGenre(){
		super(null,MovieGenre.dbLabelName,MovieGenre.urlName,null);
	}
	
	public MovieGenre(String value,String displayName){
		super(value,MovieGenre.dbLabelName,MovieGenre.urlName,displayName);
	}
}
