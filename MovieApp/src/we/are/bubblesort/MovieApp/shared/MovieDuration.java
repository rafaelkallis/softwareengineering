package we.are.bubblesort.MovieApp.shared;

public class MovieDuration extends MovieAttribute {

	public static final String dbLabelName = "movie_runtime";
	
	public MovieDuration(){
		
	}
	
	public MovieDuration(Integer value,String displayName){
		super(value,MovieDuration.dbLabelName,displayName);
	}
}