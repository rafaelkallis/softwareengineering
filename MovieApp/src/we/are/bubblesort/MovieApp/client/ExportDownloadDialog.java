package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.client.resources.ClientResources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.ScriptInjector;
import com.google.gwt.dom.client.Element;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.Widget;

public class ExportDownloadDialog extends View {

	private static ExportDownloadDialogUiBinder uiBinder = GWT
			.create(ExportDownloadDialogUiBinder.class);

	interface ExportDownloadDialogUiBinder extends
			UiBinder<Widget, ExportDownloadDialog> {
	}

	@UiField
	protected Anchor downloadLink;
	protected Panel main;

	public ExportDownloadDialog() {
		initWidget(uiBinder.createAndBindUi(this));
		
		ScriptInjector.fromString(ClientResources.INSTANCE.jquery().getText()).setWindow(ScriptInjector.TOP_WINDOW).inject();
		ScriptInjector.fromString(ClientResources.INSTANCE.bootstrap().getText()).setWindow(ScriptInjector.TOP_WINDOW).inject();

		this.getElement().setId("exportDialog" + HTMLPanel.createUniqueId());
	}

	public void setUrl(String url) {
		this.downloadLink.setHref(url);
		this.downloadLink.getElement().setAttribute("download", "MovieAppExport.png");
		this.downloadLink.getElement().setAttribute("target", "_blank");
	}

	public void show() {
		showDialog(this.getElement(), true);
	}
	
	protected void hide() {
		showDialog(this.getElement(), false);
	}

	private native static void showDialog(Element dialog, Boolean show) /*-{
		$wnd.jQuery(dialog).modal(show ? 'show' : 'hide');
	}-*/;
}
