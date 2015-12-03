package we.are.bubblesort.MovieApp.client;

import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.http.client.Response;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FormPanel;
import com.google.gwt.user.client.ui.FormPanel.SubmitCompleteEvent;

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
		this.view.form.addSubmitCompleteHandler(new FormPanel.SubmitCompleteHandler() {
			@Override
			public void onSubmitComplete(SubmitCompleteEvent event) {
				String results = event.getResults();

				if (results == null || results.startsWith("success")) {
					importSuccessful(results);
				}
				else {
					importFailed(results);
				}
			}
        });
		
		this.resetForm();
	}

	private void importSuccessful(String results) {
		this.resetForm();
		Window.alert("Upload successful (Import states it was successful too)");
	}

	private void importFailed(String results) {
		this.resetForm();
		Window.alert(results);
	}
	
	protected void resetForm() {
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
