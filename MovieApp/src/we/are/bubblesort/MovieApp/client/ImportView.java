package we.are.bubblesort.MovieApp.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.FileUpload;
import com.google.gwt.user.client.ui.FormPanel;
import com.google.gwt.user.client.ui.Hidden;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.Widget;

public class ImportView extends View {
	private static ImportViewUiBinder uiBinder = GWT.create(ImportViewUiBinder.class);

	interface ImportViewUiBinder extends UiBinder<Widget, ImportView> {
	}
	
	@UiField Button submit;
	@UiField FormPanel form;
	@UiField FileUpload file;
	@UiField Hidden session;
	@UiField Panel errorUpload;
	@UiField Panel errorFormat;
	@UiField Panel success;
	@UiField Panel errorNoFile;
	
	@UiHandler("submit")
	void onSubmit(ClickEvent e) {
		form.submit();
	}

	public ImportView() {
		initWidget(uiBinder.createAndBindUi(this));

        this.form.setEncoding(FormPanel.ENCODING_MULTIPART);
        this.form.setMethod(FormPanel.METHOD_POST);
        this.file.setName("importCSV");
	}
	
	public void clearMessages() {
		this.errorFormat.setVisible(false);
		this.errorNoFile.setVisible(false);
		this.errorUpload.setVisible(false);
		this.success.setVisible(false);
	}
	
	public void showSuccessMessage() {
		this.success.setVisible(true);
	}
	
	public void showErrorNoFileMessage() {
		this.errorNoFile.setVisible(true);
	}
	
	public void showErrorUploadMessage() {
		this.errorUpload.setVisible(true);
	}
	
	public void showErrorFormatMessage() {
		this.errorFormat.setVisible(true);
	}
	
	public void indicateSetup() {
        // Disable the button until we get the URL to POST to
        this.submit.setText("Loading...");
        this.submit.setEnabled(false);
	}

	public void setupForm(String uploadUrl) {
		this.form.reset();
		this.form.setAction(uploadUrl);
        this.submit.setText("Hochladen");
        this.submit.setEnabled(true);
        this.clearMessages();
	}
}
