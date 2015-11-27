package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Composite;

public class AdminAreaSection extends Section {
	protected AdminAreaSectionView view = new AdminAreaSectionView();
	protected ImportPresenter importPresenter;
	
	AdminAreaSection(String sectionName) {
		super(sectionName);
		this.requiresLogin = true;
	}
	
	AdminAreaSection() {
		this("adminarea");
	}

	@Override
	void init() {
		this.initialized = true;
		
		this.importPresenter = new ImportPresenter();
		this.view.importForm.add(importPresenter.getCompositeView());
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
