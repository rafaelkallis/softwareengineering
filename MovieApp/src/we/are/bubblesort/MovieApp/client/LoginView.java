package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.client.resources.ClientResources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.ScriptInjector;
import com.google.gwt.dom.client.Element;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.FormPanel;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;

public class LoginView extends View {

	private static LoginViewUiBinder uiBinder = GWT
			.create(LoginViewUiBinder.class);

	interface LoginViewUiBinder extends
			UiBinder<Widget, LoginView> {
	}

	@UiField Button loginButton;
	@UiField TextBox username;
	@UiField PasswordTextBox password;
	@UiField FormPanel loginForm;
	@UiField Panel error;

	public LoginView() {
		initWidget(uiBinder.createAndBindUi(this));
		
		ScriptInjector.fromString(ClientResources.INSTANCE.jquery().getText()).setWindow(ScriptInjector.TOP_WINDOW).inject();
		ScriptInjector.fromString(ClientResources.INSTANCE.bootstrap().getText()).setWindow(ScriptInjector.TOP_WINDOW).inject();

		this.getElement().setId("loginDialog" + HTMLPanel.createUniqueId());

        this.loginForm.setEncoding(FormPanel.ENCODING_MULTIPART);
        this.loginForm.setMethod(FormPanel.METHOD_POST);
	}
	
	public void show() {
		showDialog(this.getElement(), true);
	}
	
	public void hide() {
		showDialog(this.getElement(), false);
	}

	private native static void showDialog(Element dialog, Boolean show) /*-{
		$wnd.jQuery(dialog).modal(show ? 'show' : 'hide');
	}-*/;

	public void showLoginError() {
		this.password.setText("");
		this.error.setVisible(true);
	}
}
