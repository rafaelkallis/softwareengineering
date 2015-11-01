package we.are.bubblesort.MovieApp.shared;

public class MovieID extends MovieAttribute {
	public static String dbName = "id";
	public MovieID(Integer value){
		super(value,MovieID.dbName);
	}
}
