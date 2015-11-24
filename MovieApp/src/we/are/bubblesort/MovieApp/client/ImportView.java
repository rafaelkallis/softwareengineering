package we.are.bubblesort.MovieApp.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.FileUpload;
import com.google.gwt.user.client.ui.FormPanel;
import com.google.gwt.user.client.ui.Widget;

public class ImportView extends View {
	private static ImportViewUiBinder uiBinder = GWT.create(ImportViewUiBinder.class);

	interface ImportViewUiBinder extends UiBinder<Widget, ImportView> {
	}
	
	@UiField Button submit;
	@UiField FormPanel form;
	@UiField FileUpload file;

	public ImportView() {
		initWidget(uiBinder.createAndBindUi(this));

        this.form.setEncoding(FormPanel.ENCODING_MULTIPART);
        this.form.setMethod(FormPanel.METHOD_POST);
        this.file.setName("importTSV");
	}
	
	public void indicateSetup() {
        // Disable the button until we get the URL to POST to
        this.submit.setText("Loading...");
        this.submit.setEnabled(false);
	}

	public void setupForm(String uploadUrl) {
		this.form.setAction(uploadUrl);
        this.submit.setText("Hochladen");
        this.submit.setEnabled(true);
	}
}
