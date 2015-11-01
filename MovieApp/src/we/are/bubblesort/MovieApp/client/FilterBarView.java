package we.are.bubblesort.MovieApp.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.Widget;

public class FilterBarView extends View {
	private static FilterBarViewUiBinder uiBinder = GWT
			.create(FilterBarViewUiBinder.class);

	interface FilterBarViewUiBinder extends
			UiBinder<Widget, FilterBarView> {
	}

	@UiField Panel main;

	public FilterBarView() {
		initWidget(uiBinder.createAndBindUi(this));
	}
}
