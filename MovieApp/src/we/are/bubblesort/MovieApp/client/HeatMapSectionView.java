package we.are.bubblesort.MovieApp.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.Widget;

public class HeatMapSectionView extends SectionView {

	private static HeatMapSectionViewUiBinder uiBinder = GWT
			.create(HeatMapSectionViewUiBinder.class);

	interface HeatMapSectionViewUiBinder extends
			UiBinder<Widget, HeatMapSectionView> {
	}

	@UiField Panel mainPanel;
	@UiField Panel yearFilter;
	@UiField Panel worldmap;
	@UiField Panel mapannotations;
	@UiField Button exportbutton;

	public HeatMapSectionView() {
		initWidget(uiBinder.createAndBindUi(this));
	}
}
