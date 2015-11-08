package we.are.bubblesort.MovieApp.client;

import java.util.HashMap;
import java.util.List;

public interface FilterSelectableViewInterface extends FilterViewInterface {
	void setItems(List<HashMap<String, String>> items);
}
