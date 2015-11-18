package we.are.bubblesort.MovieApp.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.HasClickHandlers;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.RootPanel;

public class ExportPresenter extends Presenter implements ExportReadyEventHandler {
	protected HasClickHandlers view;
	protected ExportableInterface subject;
	protected ExportDownloadDialog dialog;
	
	ExportPresenter(ExportableInterface subject, HasClickHandlers view) {
		this.view = view;
		this.subject = subject;
		
		this.dialog = new ExportDownloadDialog();
		RootPanel.get().add(dialog);

		final ExportReadyEventHandler handler = this;
		final ExportableInterface exportSubject = this.subject;
		
		this.view.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				exportSubject.startExport(handler);
			}
		});
	}
	
	@Override
	public void onExportReady(String url) {
		dialog.setUrl(url);
		dialog.show();
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
