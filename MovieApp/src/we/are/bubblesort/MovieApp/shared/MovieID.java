package we.are.bubblesort.MovieApp.shared;

public class MovieID extends MovieAttribute {
	public static String dbLabelName = "id";
	public MovieID(Integer value){
		super(value,MovieID.dbLabelName);
	}
}
