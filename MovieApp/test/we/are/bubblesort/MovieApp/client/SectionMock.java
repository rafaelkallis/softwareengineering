
package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Composite;

public class SectionMock extends Section{
	
	SectionMock(String sectionName) {
		super(sectionName);
	}
	
	SectionMock() {
		this("mocksection");
	}

	@Override
	void init() {
		this.initialized = true;
	}
	
	@Override
	public Composite getCompositeView() {
		return (Composite)this.view;
	}

	@Override
	public View getView() {
		return (View)this.view;
	}

	@Override
	void hide() {
		this.view.hide();
	}

	@Override
	void show() {
		this.view.show();
	}

}