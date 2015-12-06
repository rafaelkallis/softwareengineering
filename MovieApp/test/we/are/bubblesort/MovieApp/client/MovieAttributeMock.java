package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.MovieID;

public class MovieAttributeMock extends MovieAttribute{
	public static final String dbLabelName = "mock";
	
	public MovieAttributeMock(String value){
		super(value,MovieID.dbLabelName,MovieID.dbLabelName,value.toString());
	}
}
