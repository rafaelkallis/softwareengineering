package we.are.bubblesort.MovieApp.client;

import java.util.ArrayList;

import com.google.web.bindery.event.shared.Event.Type;

public interface TableViewInterface {
	public void setHeader(ArrayList<String> headers);
	public void addItem(ArrayList<String> item);
	public void addHandler(Type<LoadMoreEventHandler> tYPE, TablePresenter tablePresenter);
	public void clearRows();
	public int getRowCount();
}
