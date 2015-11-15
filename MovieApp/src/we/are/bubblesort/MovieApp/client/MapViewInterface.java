package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.WorldStatisticsModel;


public interface MapViewInterface {
	void setModel(WorldStatisticsModel model);
	void update();
	void startExport();
}
