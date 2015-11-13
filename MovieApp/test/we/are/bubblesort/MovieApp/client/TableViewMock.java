package we.are.bubblesort.MovieApp.client;

import java.util.ArrayList;

import com.google.web.bindery.event.shared.Event.Type;

public class TableViewMock implements TableViewInterface{
	public ArrayList<String> rows = new ArrayList<String>();
	@Override
	public void setHeader(ArrayList<String> headers) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void addItem(ArrayList<String> item) {
		this.rows.add(new String());
	}

	@Override
	public void addHandler(Type<LoadMoreEventHandler> tYPE, TablePresenter tablePresenter) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void clearRows() {
		// TODO Auto-generated method stub
		
	}

	public int getItemsCount() {
		return rows.size();
	}

	@Override
	public void hideMoreButton() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void showMoreButton() {
		// TODO Auto-generated method stub
		
	}
	
}
