package we.are.bubblesort.MovieApp.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.HasClickHandlers;
import com.google.gwt.user.client.ui.Composite;

public class SourcePresenter extends Presenter {
	protected HasClickHandlers view = null;

	SourcePresenter(HasClickHandlers view) {
		this.view = view;

		this.view.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				emitImprintEvent();
			}
		});
	}
	
	public void emitImprintEvent() {
		AppController controller = MovieApp.controller;
		Section imprintSection = controller.getSectionByName("imprint");
		
		if (imprintSection != null) {
			MovieApp.controller.eventBus.fireEvent(new AppActivateSectionEvent(imprintSection.getId()));
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
