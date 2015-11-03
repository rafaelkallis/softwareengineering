package we.are.bubblesort.MovieApp.shared;

public class MovieYear extends MovieAttribute {
	
	public static final String dbLabelName = "movie_release_year";
	
	public MovieYear(){
		super(null,MovieYear.dbLabelName,null);
	}
	
	public MovieYear(String value){
		super(value,MovieYear.dbLabelName,value);
	}
}
