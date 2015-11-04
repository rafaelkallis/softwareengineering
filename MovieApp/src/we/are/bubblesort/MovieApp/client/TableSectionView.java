package we.are.bubblesort.MovieApp.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.Widget;

public class TableSectionView extends SectionView {

	private static TableSectionViewUiBinder uiBinder = GWT
			.create(TableSectionViewUiBinder.class);

	interface TableSectionViewUiBinder extends
			UiBinder<Widget, TableSectionView> {
	}
	
	@UiField Panel mainPanel;
	@UiField Panel toolbar;
	@UiField Panel changeSideToolbar;
	
	private Button filterButton = new Button("Titel"); // Filter button (to made scrolldrown) and "Titel" (or id?) as default 
	private Button exportButton = new Button("Export");
	
	private FlexTable FlexTable = new FlexTable();
	
	private Button nextButton = new Button("Weiter");
	private Button previousButton = new Button("Zurück");
	

	public TableSectionView() {
		initWidget(uiBinder.createAndBindUi(this));
	}
	
	public void loadTable() {
		
		// Create table (23x5) for film data.
	    FlexTable.setWidget(0, 0, new Button("Filter")); //(row, column, widget to add)
	    FlexTable.setWidget(0, 1, new Button("Export"));
		FlexTable.setText(1, 0, "Titel"); //(row, column, text to be displayed)
	    FlexTable.setText(1, 1, "Land");
	    FlexTable.setText(1, 2, "Jahr");
	    FlexTable.setText(1, 3, "Sprache");
	    FlexTable.setText(1, 4, "Genre");
	    FlexTable.setText(1, 5, "Dauer");
	    FlexTable.setWidget(22, 0, previousButton);
	    FlexTable.setWidget(22, 4, nextButton);

	    // Add styles to elements in the movie list table.
		FlexTable.setCellPadding(6);
	}
	
	public void showMovies() {
		
		// handle "nextButtonEvent"
		for (int i=2; i<22; i++) {
	    	
	    	FlexTable.setText(i, 0, ""/*getTitle()*/);
	    	
	    }
	    for (int i=2; i<22; i++) {
	    	
	    	FlexTable.setText(i, 1, ""/*getCountry()*/);
	    	
	    }
	    for (int i=2; i<22; i++) {
	
	    	FlexTable.setText(i, 2, ""/*getYear()*/);
	
	    }
	    for (int i=2; i<22; i++) {
	
	    	FlexTable.setText(i, 3, ""/*getLanguage()*/);

	    }
	    for (int i=2; i<22; i++) {
	
	    	FlexTable.setText(i, 4, ""/*getGenre()*/);
	
	    }
	    for (int i=2; i<22; i++) {
	    	
	    	FlexTable.setText(i, 5, ""/*getDuration()*/);
	
	    }
	}
}
