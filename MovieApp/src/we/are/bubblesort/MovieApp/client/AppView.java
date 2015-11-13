package we.are.bubblesort.MovieApp.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Hyperlink;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.Widget;

public class AppView extends View {
	private static AppViewUiBinder uiBinder = GWT.create(AppViewUiBinder.class);

	interface AppViewUiBinder extends UiBinder<Widget, AppView> {
	}

	@UiField Panel appPanel;
	@UiField Panel appHeaderPanel;
	@UiField Panel appMainNavigationPanel;
	@UiField Panel appSectionContainerPanel;
	@UiField Hyperlink sourceLink;

	public AppView() {
		initWidget(uiBinder.createAndBindUi(this));
	}
}
