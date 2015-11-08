package we.are.bubblesort.MovieApp.shared;

public class MovieGenre extends MovieAttribute {
	public static final String dbLabelName = "movie_genres";
	
	public MovieGenre(){
		super(null,MovieGenre.dbLabelName,null);
	}
	
	public MovieGenre(String value,String displayName){
		super(value,MovieGenre.dbLabelName,displayName);
	}
}
