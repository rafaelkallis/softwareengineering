package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.User;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.InlineLabel;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.Widget;

public class AdminAreaSectionView extends SectionView {

	private static AdminAreaSectionViewUiBinder uiBinder = GWT
			.create(AdminAreaSectionViewUiBinder.class);

	interface AdminAreaSectionViewUiBinder extends
			UiBinder<Widget, AdminAreaSectionView> {
	}
	
	@UiField Panel importForm;
	@UiField InlineLabel username;
	@UiField Panel changePassword;
	@UiField Anchor logout;

	public AdminAreaSectionView() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	public void updateUser(User localUser) {
		this.username.setText(localUser.getName());
	}
}
