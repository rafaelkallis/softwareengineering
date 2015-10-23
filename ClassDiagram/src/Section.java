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
	
	protected WorldMapView 			worldMapView;
	private WorldMapPresenter 		worldMapPresenter;
	
	private FilterView 				genreFilterView;
	private GenreFilterPresenter 	genreFilterPresenter;
	
	private FilterView 				countryFilterView;
	private CountryFilterPresenter 	countryFilterPresenter;
	
	private FilterView 				languageFilterView;
	private LanguageFilterPresenter languageFilterPresenter;
	
	private RangeSliderView 		rangeSliderView;
	private YearFilterPresenter 	rangeSliderPresenter;
	
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
	protected Object sectionEventBus;
	Presenter(Object sectionEventBus){
		this.sectionEventBus = sectionEventBus;
	}
}

class FilterPresenter extends Presenter{
	//private FilterViewInterface view; //communicates indirect via sectionEventBus
	FilterPresenter(Object sectionEventBus){
		super(sectionEventBus);
	}
	private MovieAttribute attribute; // but why?
}

class WorldMapPresenter extends Presenter{
	WorldMapPresenter(Object sectionEventBus){
		super(sectionEventBus);
	}
}

class TablePresenter extends Presenter {
	TablePresenter(Object sectionEventBus){
		super(sectionEventBus);
	}
}

class HeatMapPresenter extends Presenter{
	HeatMapPresenter(Object sectionEventBus){
		super(sectionEventBus);
	}
}

class LoginPresenter extends Presenter{
	LoginPresenter(Object sectionEventBus){
		super(sectionEventBus);
	}
}

class ImportPresenter extends Presenter{
	ImportPresenter(Object sectionEventBus){
		super(sectionEventBus);
	}
}

class StatisticsPresenter extends Presenter{
	StatisticsPresenter(Object sectionEventBus){
		super(sectionEventBus);
	}
}

class ChartPresenter extends Presenter{
	//private ChartViewInterface view; //communicates indirect via section eventbus
	ChartPresenter(Object sectionEventBus){
		super(sectionEventBus);
	}
}

class AdvertisementPresenter extends Presenter{
	AdvertisementPresenter(Object sectionEventBus){
		super(sectionEventBus);
	}
}


/*
 * Special Presenter
 * operates threw global event bus
 */
class NavigationPresenter extends Presenter{
	NavigationPresenter(Object globalEventBus){
		super(globalEventBus);
	}
}

class YearFilterPresenter extends FilterPresenter {
	YearFilterPresenter(Object sectionEventBus){
		super(sectionEventBus);
	}
}

class LanguageFilterPresenter extends FilterPresenter {
	LanguageFilterPresenter(Object sectionEventBus){
		super(sectionEventBus);
	}
}

class GenreFilterPresenter extends FilterPresenter {
	GenreFilterPresenter(Object sectionEventBus){
		super(sectionEventBus);
	}
}

class CountryFilterPresenter extends FilterPresenter {
	CountryFilterPresenter(Object sectionEventBus){
		super(sectionEventBus);
	}
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