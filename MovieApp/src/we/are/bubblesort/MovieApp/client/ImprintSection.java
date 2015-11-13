package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Composite;

public class ImprintSection extends Section {
	protected ImprintSectionView view = new ImprintSectionView();
	
	ImprintSection(String sectionName) {
		super(sectionName);
	}
	
	ImprintSection() {
		this("imprint");
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
