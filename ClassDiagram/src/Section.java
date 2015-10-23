/*
 * Section
 */

/*
 * Dependencies:
 * 	GlobalEventBus
 */
public abstract class Section {
	protected Object sectionEventBus;
	protected Object globalEventBus;
	protected AppController appController;
	
	Section(Object sectionEventBus, Object globalEventBus){
		this.sectionEventBus = sectionEventBus;
		this.globalEventBus = globalEventBus;
	}
	abstract void activateSection();
	abstract void fireEvent(Object event);
	abstract void eventHandler(Object event);
}

class WorldMapSection extends Section{
	
	private WorldMapView worldMapView;
	private WorldMapPresenter worldMapPresenter;
	
	private FilterView genreFilterView;
	private GenreFilterPresenter genreFilterPresenter;
	
	private FilterView countryFilterView;
	private CountryFilterPresenter countryFilterPresenter;
	
	private FilterView languageFilterView;
	private LanguageFilterPresenter languageFilterPresenter;
	
	private RangeSliderView rangeSliderView;
	private YearFilterPresenter rangeSliderPresenter;
	
	WorldMapSection(Object globalEventBus){
		super(new Object()/* FIXME: constructor of sectionEventBus here*/,globalEventBus);
		this.worldMapView = new WorldMapView(this.sectionEventBus);
		this.worldMapPresenter = new WorldMapPresenter(this.sectionEventBus);
		this. genreFilterView = new FilterView(this.sectionEventBus);
	}
	void activateSection(){
		// Nothing To do
	}
	void fireEvent(Object event){
		// Do something
	}
	 void eventHandler(Object event){
		// Handle event
	}
}
class TableSection extends Section{
	private TableView tableView;
	private FilterView languageFilterView;
	TableSection(Object sectionEventBus){
		super(sectionEventBus);
	}
}
class HeatMapSection extends Section{
	HeatMapSection(Object sectionEventBus){
		super(sectionEventBus);
	}
}
class StatisticsSection extends Section{
	StatisticsSection(Object sectionEventBus){
		super(sectionEventBus);
	}
}
class AdminareaSection extends Section{
	AdminareaSection(Object sectionEventBus){
		super(sectionEventBus);
	}
}

/*
 * View
 */

abstract class View{
	View(Object sectionEventBus){
		this.sectionEventBus = sectionEventBus;
	}
	protected Object sectionEventBus;
}

class LoginView extends View{
  LoginView(Object sectionEventBus){
		super(sectionEventBus);
	}
}
class ImportView extends View{
  ImportView(Object sectionEventBus){
		super(sectionEventBus);
	}
}

//interface FilterViewInterface {
//}
/*	FilterView	*/

abstract class FilterView extends View{
	FilterView(Object sectionEventBus){
		super(sectionEventBus);
	}
}

class RangeSliderView extends FilterView {
	RangeSliderView(Object sectionEventBus){
		super(sectionEventBus);
	}
}
class SelectListView extends FilterView {
	SelectListView(Object sectionEventBus){
		super(sectionEventBus);
	}
}

class SearchBoxView extends FilterView {
	  SearchBoxView(Object sectionEventBus){
			super(sectionEventBus);
	}
}

/*	ChartView	*/
abstract class ChartView extends View{
	ChartView(Object sectionEventBus){
		super(sectionEventBus);
	}
}

class PieChartView extends ChartView {
	PieChartView(Object sectionEventBus){
		super(sectionEventBus);
	}
}
class BarChartView extends ChartView {
	BarChartView((Object sectionEventBus){
		super(sectionEventBus);
	}
}

//interface ChartViewInterface {
//}

class AdvertismentView extends View {
	AdvertismentView(Object sectionEventBus){
		super(sectionEventBus);
	}
  //private AdvertisementPresenter presenter;
}
class NavigationView extends View {
	NavigationView(Object sectionEventBus){
		super(sectionEventBus);
	}
}

class WorldMapView extends View{
	private WorldStatisticsModel model;
	WorldMapView(Object sectionEventBus){
		super(sectionEventBus);
	}
}
class TableView extends View{
	TableView(Object sectionEventBus){
		super(sectionEventBus);
	}
}
class HeatMapView extends View{
	HeatMapView(Object sectionEventBus){
		super(sectionEventBus);
	}
}
class StatisticsView extends View{
	StatisticsView(Object sectionEventBus){
		super(sectionEventBus);
	}
}
class AdminareaView extends View{
	AdminareaView(Object sectionEventBus){
		super(sectionEventBus);
	}
}

/*
 * Presenter
 * 
 */

abstract class Presenter{
	protected View view;
	protected Object sectionEventBus;
	Presenter(View view, Object sectionEventBus){
		this.view = view;
		this.sectionEventBus = sectionEventBus;
	}
}

class FilterPresenter extends Presenter{
	//private FilterViewInterface view; //inherited from Presenter
	private MovieAttribute attribute;
}

class WorldMapPresenter extends Presenter{
	WorldMapPresenter(WorldMapView view, Object sectionEventBus){
		super(view,sectionEventBus);
	}
}

class TablePresenter extends Presenter {

}

class HeatMapPresenter extends Presenter{
	
}

class LoginPresenter extends Presenter{

}

class ImportPresenter extends Presenter{

}

class StatisticsPresenter extends Presenter{

}

class ChartPresenter extends Presenter{
	//private ChartViewInterface view; //inherited from Presenter
}

class AdvertisementPresenter extends Presenter{

}

class NavigationPresenter extends Presenter{

}

class YearFilterPresenter extends FilterPresenter {

}

class LanguageFilterPresenter extends FilterPresenter {

}

class GenreFilterPresenter extends FilterPresenter {

}

class CountryFilterPresenter extends FilterPresenter {

}

/*
 * Model
 * NO DEPENDENCIES
 */

class WorldStatisticsModel{
	
}
class StatisticsModel{
	
}
class FilterModel{
	
}
class MovieCollection{
	Movie[] movies;
}