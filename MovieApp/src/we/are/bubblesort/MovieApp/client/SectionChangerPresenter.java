package we.are.bubblesort.MovieApp.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.HasClickHandlers;
import com.google.gwt.user.client.ui.Composite;

public class SectionChangerPresenter extends Presenter {
	protected HasClickHandlers view = null;
	protected String sectionName;

	SectionChangerPresenter(HasClickHandlers view, String targetSectionName) {
		this.view = view;
		this.sectionName = targetSectionName;

		this.view.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				AppController controller = MovieApp.controller;
				Section section = controller.getSectionByName(sectionName);
				
				if (section != null) {
					MovieApp.controller.eventBus.fireEvent(new AppActivateSectionEvent(section.getId()));
				}
			}
		});
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
