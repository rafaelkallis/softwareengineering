package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.ImportResultCode;

import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.http.client.Response;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FormPanel;
import com.google.gwt.user.client.ui.FormPanel.SubmitCompleteEvent;
import com.google.gwt.user.client.ui.FormPanel.SubmitEvent;
import com.google.gwt.user.client.ui.FormPanel.SubmitHandler;

public class ImportPresenter extends Presenter {
	protected ImportView view;

	ImportPresenter(ImportView view) {
		this.view = view;
		this.init();
	}
	
	ImportPresenter() {
		this(new ImportView());
	}
	
	protected void init() {
		this.view.form.addSubmitHandler(new SubmitHandler() {
			@Override
			public void onSubmit(SubmitEvent event) {
				view.clearMessages();
			}
		});
		
		this.view.form.addSubmitCompleteHandler(new FormPanel.SubmitCompleteHandler() {
			@Override
			public void onSubmitComplete(SubmitCompleteEvent event) {
				String results = event.getResults();
				ImportResultCode resultCode;
				
				try {
					resultCode = ImportResultCode.valueOf(results);
				}
				catch (IllegalArgumentException e) {
					resultCode = ImportResultCode.OTHER;
				}
				catch (NullPointerException e) {
					resultCode = ImportResultCode.OTHER;
				}

				if (resultCode == ImportResultCode.SUCCESS) {
					importSuccessful();
				}
				else {
					importFailed(resultCode);
				}
			}
        });
		
		this.resetForm();
	}

	private void importSuccessful() {
		this.resetForm();
		this.view.showSuccessMessage();
	}

	private void importFailed(ImportResultCode code) {
		this.resetForm();
		
		switch (code) {
			case UNSUPPORTED_FORMAT:
				this.view.showErrorFormatMessage();
				break;
			case NO_FILE_UPLOADED:
				this.view.showErrorNoFileMessage();
			break;
			default:
				this.view.showErrorUploadMessage();
		}
	}
	
	protected void resetForm() {
		this.view.session.setName(UserService.sessionCookieName);
		this.view.session.setValue(AccountPresenter.localUser.getSessionId());
		this.view.indicateSetup();
		
		String url = "/import";
		RequestBuilder builder = new RequestBuilder(
		                            RequestBuilder.GET, url);
		builder.setCallback(new RequestCallback() {
			@Override
			public void onResponseReceived(Request request, Response response) {
				if (response.getStatusCode() == 200) {
					view.setupForm(response.getText());
				}
				else {
					Window.alert("Could not reach import service (" + response.getStatusCode() + ").");
				}
			}

			@Override
			public void onError(Request request, Throwable exception) {
				Window.alert("Could not reach import service (onError).");
				exception.printStackTrace();
			}
		});
		
		try {
			builder.send();
		} catch (RequestException e) {
			Window.alert("Could not reach import service (RequestException).");
			e.printStackTrace();
		}
	}

	@Override
	public Composite getCompositeView() {
		return (Composite)this.view;
	}

	@Override
	public View getView() {
		return (View)this.view;
	}
}
