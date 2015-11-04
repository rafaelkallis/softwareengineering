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
		
		// Create table for film data.
	    FlexTable.setText(0, 0, "Titel"); //(row, column, text to be displayed)
	    FlexTable.setText(0, 1, "Land");
	    FlexTable.setText(0, 2, "Jahr");
	    FlexTable.setText(0, 3, "Genre");
	    FlexTable.setText(0, 4, "Dauer");

	    // Add styles to elements in the stock list table.
		FlexTable.setCellPadding(6);
	}
}
