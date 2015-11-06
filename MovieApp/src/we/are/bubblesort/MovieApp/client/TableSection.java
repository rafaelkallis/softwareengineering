package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;

public class TableSection extends Section {
	static final String defaultName = "Tabelle";
	protected QueryServiceAsync queryService;
	protected TableSectionView view = new TableSectionView();
	protected TablePresenter table = new TablePresenter();
	
	TableSection(String sectionName, QueryServiceAsync queryService) {
		super(sectionName);
		this.queryService = queryService;
	}
	
	TableSection(QueryServiceAsync queryService) {
		this(defaultName, queryService);
	}

	@Override
	void init() {
		this.table = new TablePresenter();
		
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
