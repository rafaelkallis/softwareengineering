package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Composite;

public class TableSection extends Section {
	static final String defaultName = "Tabelle";
	protected QueryServiceAsync queryService;
	protected TableSectionView view = new TableSectionView();
	protected TablePresenter table;
	
	TableSection(String sectionName, QueryServiceAsync queryService) {
		super(sectionName);
		this.queryService = queryService;
	}
	
	TableSection(QueryServiceAsync queryService) {
		this(defaultName, queryService);
	}

	@Override
	void init() {
		this.table = new TablePresenter(this.queryService);
		
		this.view.tablePanel.add(this.table.getCompositeView());
		this.table.loadTable();
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
