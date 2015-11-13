package we.are.bubblesort.MovieApp.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;

public class ImprintSectionView extends SectionView {

	private static ImprintSectionViewUiBinder uiBinder = GWT
			.create(ImprintSectionViewUiBinder.class);

	interface ImprintSectionViewUiBinder extends
			UiBinder<Widget, ImprintSectionView> {
	}

	public ImprintSectionView() {
		initWidget(uiBinder.createAndBindUi(this));
	}
}
