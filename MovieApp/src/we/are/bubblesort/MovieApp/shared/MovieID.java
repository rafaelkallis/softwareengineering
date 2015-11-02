package we.are.bubblesort.MovieApp.shared;

public class MovieID extends MovieAttribute {
	
	private static final long serialVersionUID = -5428144768230171219L;
	public static final String dbLabelName = "id";
	public MovieID(Integer value){
		super(value,MovieID.dbLabelName,value.toString());
	}
}
