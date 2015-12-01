package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.InvalidSessionException;
import we.are.bubblesort.MovieApp.shared.User;
import we.are.bubblesort.MovieApp.shared.WrongCredentialsException;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Cookies;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FormPanel;
import com.google.gwt.user.client.ui.FormPanel.SubmitEvent;
import com.google.gwt.user.client.ui.RootPanel;

public class AccountPresenter extends Presenter {
	protected LoginView loginView;
	protected UserServiceAsync userService;
	protected static String sessionCookieName = "sid";
	protected static User localUser = new User();
	protected LoginEventHandler loginSuccessHandler = null;
	
	public AccountPresenter(UserServiceAsync userService) {
		this(userService, new LoginView());
	}
	
	public AccountPresenter(UserServiceAsync userService, LoginView view) {
		this.loginView = view;
		this.userService = userService;

		RootPanel.get().add(this.loginView);
		this.init();
	}
	
	public void init() {
		this.loginView.loginForm.addSubmitHandler(new FormPanel.SubmitHandler() {
			@Override
			public void onSubmit(SubmitEvent event) {
				String username = loginView.username.getText();
				String password = loginView.password.getText();
				
				checkLoginWithPassword(username, password);
				
				event.cancel();
			}
		});
	}

	protected void checkLoginWithPassword(String username, String password) {
		this.userService.loginWithPassword(new User(username), password, new AsyncCallback<User>() {
			@Override
			public void onFailure(Throwable caught) {
				if (caught instanceof WrongCredentialsException) {
					loginView.showLoginError();
				}
				else {
					Window.alert("Unexepected error while logging in with password.");
				}
			}
			
			@Override
			public void onSuccess(User validUser) {
				localUser = validUser;
				Cookies.setCookie(sessionCookieName, localUser.getSessionId());
				
				if (loginSuccessHandler != null) {
					loginSuccessHandler.onSuccess();
				}
				
				loginView.hide();
			}
		});
	}

	public void requiresLogin(LoginEventHandler handler) {
		this.loginSuccessHandler = handler;
		
		if (this.getLocalUser().isLoggedIn()) {
			this.loginSuccessHandler.onSuccess();
		}
		
		// check for session log in
		String sessionId = Cookies.getCookie(sessionCookieName);
		
		if (sessionId != null) {
			this.userService.loginWithSession(sessionId, new AsyncCallback<User>(){
				@Override
				public void onFailure(Throwable caught) {
					if (caught instanceof InvalidSessionException) {
						GWT.log("Session invalid, deleting.");
						Cookies.removeCookie(sessionCookieName);
						showLogin();
					}
					else {
						Window.alert("Unexepected error while logging in with password.");
					}
				}

				@Override
				public void onSuccess(User validUser) {
					localUser = validUser;
					loginSuccessHandler.onSuccess();
				}
			});
		}
		else {
			showLogin();
		}
	}
  
	protected void showLogin() {
		this.loginView.show();
	}

	@Override
	public Composite getCompositeView() {
		return (Composite)this.loginView;
	}

	@Override
	public View getView() {
		return (View)this.loginView;
	}

	public void show() {
		this.loginView.show();
	}

	public User getLocalUser() {
		return localUser;
	}
}
