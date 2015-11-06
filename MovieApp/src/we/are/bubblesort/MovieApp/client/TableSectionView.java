package we.are.bubblesort.MovieApp.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.Widget;
import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;

public class TableSectionView extends SectionView {

	private static TableSectionViewUiBinder uiBinder = GWT
			.create(TableSectionViewUiBinder.class);

	interface TableSectionViewUiBinder extends
			UiBinder<Widget, TableSectionView> {
	}

	@UiField Panel mainPanel;
	@UiField Panel tablePanel;
	
	protected TablePresenter table = new TablePresenter();
		
	private FlexTable FlexTable = new FlexTable();

	public TableSectionView() {
		initWidget(uiBinder.createAndBindUi(this));
	}
	
	public void loadTable() {
	    FlexTable.setText(0, 0, "Titel");
	    FlexTable.setText(0, 1, "Land");
	    FlexTable.setText(0, 2, "Jahr");
	    FlexTable.setText(0, 3, "Sprache");
	    FlexTable.setText(0, 4, "Genre");
	    FlexTable.setText(0, 5, "Dauer");

		// Add movie table to mainPanel
		mainPanel.add(FlexTable);
	}
	
	public void showMovies() {
		Collection<Movie> movies = table.getMovies();
	    int rownum = 0;
	    for (Movie movie : movies) {
	    	FlexTable.setText(rownum, 0, movie.title.displayName);
	    	FlexTable.setText(rownum, 1, "DAMNIT ALSO COUNTRIES");
	    	FlexTable.setText(rownum, 2, movie.year.displayName);
	    	FlexTable.setText(rownum, 3, "GOSHHHHHHH ALSO LANGUAGES");
	    	FlexTable.setText(rownum, 4, "WE NEED GENRES GENRES FOR THE WORLD");
	    	FlexTable.setText(rownum, 5, movie.duration.displayName);
		    rownum++;
	    }
	}
}
