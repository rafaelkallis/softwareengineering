package we.are.bubblesort.MovieApp.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.Widget;

public class WorldMapSectionView extends SectionView {

	private static WorldMapSectionViewUiBinder uiBinder = GWT
			.create(WorldMapSectionViewUiBinder.class);

	interface WorldMapSectionViewUiBinder extends
			UiBinder<Widget, WorldMapSectionView> {
	}

	@UiField Panel mainPanel;
	@UiField Panel yearFilter;
	@UiField Panel worldmap;
	@UiField Button exportbutton;

	public WorldMapSectionView() {
		initWidget(uiBinder.createAndBindUi(this));
	}
}
