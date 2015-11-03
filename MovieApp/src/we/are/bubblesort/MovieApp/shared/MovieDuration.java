package we.are.bubblesort.MovieApp.shared;

public class MovieDuration extends MovieAttribute {

	public static final String dbLabelName = "movie_runtime";
	
	public MovieDuration(){
		super(null,MovieDuration.dbLabelName,null);
	}
	
	public MovieDuration(String value){
		super(value,MovieDuration.dbLabelName,value);
	}
}