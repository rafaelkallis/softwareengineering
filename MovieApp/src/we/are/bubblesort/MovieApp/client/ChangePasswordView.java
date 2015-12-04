package we.are.bubblesort.MovieApp.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FormPanel;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;

public class ChangePasswordView extends Composite {

	private static ChangePasswordViewUiBinder uiBinder = GWT
			.create(ChangePasswordViewUiBinder.class);

	interface ChangePasswordViewUiBinder extends
			UiBinder<Widget, ChangePasswordView> {
	}

	@UiField FormPanel form;
	@UiField TextBox oldPassword;
	@UiField TextBox newPassword;
	@UiField TextBox passwordConfirmation;
	@UiField Panel errorConfirmation;
	@UiField Panel errorWrongCredentials;
	@UiField Panel success;

	public ChangePasswordView() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	public void clearMessages() {
		this.errorConfirmation.setVisible(false);
		this.errorWrongCredentials.setVisible(false);
		this.success.setVisible(false);
	}
	
	public void clearForm() {
		this.oldPassword.setValue("");
		this.newPassword.setValue("");
		this.passwordConfirmation.setValue("");
	}

	public void showWrongConfirmationError() {
		this.errorConfirmation.setVisible(true);
	}

	public void showWrongCredentialsError() {
		this.errorWrongCredentials.setVisible(true);
		
	}

	public void showSuccessMessage() {
		this.success.setVisible(true);
		
	}

}
