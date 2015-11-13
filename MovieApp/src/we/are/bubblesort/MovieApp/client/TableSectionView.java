package we.are.bubblesort.MovieApp.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.Widget;

public class TableSectionView extends SectionView {

	private static TableSectionViewUiBinder uiBinder = GWT
			.create(TableSectionViewUiBinder.class);

	interface TableSectionViewUiBinder extends
			UiBinder<Widget, TableSectionView> {
	}

	@UiField Panel mainPanel;
	@UiField Panel tablePanel;
	@UiField Panel filterbar;
	@UiField Panel yearFilter;
	@UiField Panel genreFilter;
	@UiField Panel durationFilter;
	@UiField Panel languageFilter;
	@UiField Panel countryFilter;
	@UiField Panel titleFilter;
	@UiField Button searchButton;
	@UiField Button exportButton;

	public TableSectionView() {
		initWidget(uiBinder.createAndBindUi(this));
	}
}
