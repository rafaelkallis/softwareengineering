import java.util.HashSet;

/*
 * Section
 */

/*
 * Dependencies:
 * 	GlobalEventBus
 */
public abstract class Section {
	protected EventBus sectionEventBus;
	protected EventBus globalEventBus;
	//protected AppController appController;
	
	Section(EventBus globalEventBus){
		this.sectionEventBus = new EventBus(); //FIXME: contructor of sectionEventBus
		this.globalEventBus = globalEventBus;
	}
	abstract void activateSection();
	abstract void fireEvent(Event event);
	abstract void eventHandler(Event event);
}

final class WorldMapSection extends Section{
	
	private WorldMapView 			worldMapView;
	private WorldMapPresenter 		worldMapPresenter;
	
	private SelectListView 			genreFilterView;
	private GenreFilterPresenter 	genreFilterPresenter;
	
	private SelectListView 			countryFilterView;
	private CountryFilterPresenter 	countryFilterPresenter;
	
	private SelectListView 			languageFilterView;
	private LanguageFilterPresenter languageFilterPresenter;
	
	private RangeSliderView 		rangeSliderView;
	private YearFilterPresenter 	rangeSliderPresenter;
	
	WorldMapSection(EventBus globalEventBus){
		super(globalEventBus);
		
		this.worldMapView 			= new WorldMapView(this.sectionEventBus);
		this.worldMapPresenter 		= new WorldMapPresenter(this.sectionEventBus);
		
		this.genreFilterView 		= new SelectListView(this.sectionEventBus);
		this.genreFilterPresenter 	= new GenreFilterPresenter(this.sectionEventBus);
		
		this.countryFilterView		= new SelectListView(this.sectionEventBus);
		this.countryFilterPresenter	= new CountryFilterPresenter(this.sectionEventBus);
		
		this.languageFilterView		= new SelectListView(this.sectionEventBus);
		this.languageFilterPresenter= new LanguageFilterPresenter(this.sectionEventBus);
		
		this.rangeSliderView		= new RangeSliderView(this.sectionEventBus);
		this.rangeSliderPresenter	= new YearFilterPresenter(this.sectionEventBus);
	}
	void activateSection(){
		// Nothing To do
	}
	void fireEvent(Event event){
		// Do something
	}
	 void eventHandler(Event event){
		// Handle event
	}
}
final class TableSection extends Section{
	
	private TableView 				tableView;
	private TablePresenter			tablePresenter;
	
	private SelectListView 			genreFilterView;
	private GenreFilterPresenter 	genreFilterPresenter;
	
	private SelectListView 			countryFilterView;
	private CountryFilterPresenter 	countryFilterPresenter;
	
	private SelectListView 			languageFilterView;
	private LanguageFilterPresenter languageFilterPresenter;
	
	private SelectListView			yearFilterView;
	private YearFilterPresenter		yearFilterPresenter;
	
	TableSection(EventBus globalEventBus){
		super(globalEventBus);
		
		this.tableView				= new TableView(this.sectionEventBus);
		this.tablePresenter			= new TablePresenter(this.sectionEventBus);
		
		this.genreFilterView 		= new SelectListView(this.sectionEventBus);
		this.genreFilterPresenter 	= new GenreFilterPresenter(this.sectionEventBus);
		
		this.countryFilterView		= new SelectListView(this.sectionEventBus);
		this.countryFilterPresenter	= new CountryFilterPresenter(this.sectionEventBus);
		
		this.languageFilterView		= new SelectListView(this.sectionEventBus);
		this.languageFilterPresenter= new LanguageFilterPresenter(this.sectionEventBus);
		
		this.yearFilterView			= new SelectListView(this.sectionEventBus);
		this.yearFilterPresenter	= new YearFilterPresenter(this.sectionEventBus);
	}
	void activateSection(){
		// Nothing To do
	}
	void fireEvent(Event event){
		// Do something
	}
	 void eventHandler(Event event){
		// Handle event
	}
}
final class HeatMapSection extends Section{
	HeatMapSection(EventBus globalEventBus){
		super(globalEventBus);
	}
	void activateSection(){
		// Nothing To do
	}
	void fireEvent(Event event){
		// Do something
	}
	void eventHandler(Event event){
		// Handle event
	}
}
final class StatisticsSection extends Section{
	StatisticsSection(EventBus globalEventBus){
		super(globalEventBus);
	}
	void activateSection(){
		// Nothing To do
	}
	void fireEvent(Event event){
		// Do something
	}
	 void eventHandler(Event event){
		// Handle event
	}
}
final class AdminareaSection extends Section{
	AdminareaSection(EventBus globalEventBus){
		super(globalEventBus);
	}
	void activateSection(){
		// Nothing To do
	}
	void fireEvent(Event event){
		// Do something
	}
	 void eventHandler(Event event){
		// Handle event
	}
}

/*
 * View
 */

abstract class View{
	View(EventBus sectionEventBus){
		this.sectionEventBus = sectionEventBus;
	}
	protected EventBus sectionEventBus;
}


class ImportView extends View{
  ImportView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

//interface FilterViewInterface {
//}
/*	FilterView	*/

abstract class FilterView extends View{
	FilterView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class RangeSliderView extends FilterView {
	RangeSliderView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}
class SelectListView extends FilterView {
	SelectListView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class SearchBoxView extends FilterView {
	  SearchBoxView(EventBus sectionEventBus){
			super(sectionEventBus);
	}
}

/*	ChartView	*/
abstract class ChartView extends View{
	ChartView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class PieChartView extends ChartView {
	PieChartView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}
class BarChartView extends ChartView {
	BarChartView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

//interface ChartViewInterface {
//}

class AdvertismentView extends View {
	AdvertismentView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
  //private AdvertisementPresenter presenter;
}
class NavigationView extends View {
	NavigationView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class WorldMapView extends View{
	WorldMapView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class TableView extends View{
	TableView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}
class HeatMapView extends View{
	HeatMapView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}
class StatisticsView extends View{
	StatisticsView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}
class AdminareaView extends View{
	AdminareaView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

/*
 * Presenter
 */

abstract class Presenter{
	protected Object sectionEventBus;
	Presenter(EventBus sectionEventBus){
		this.sectionEventBus = sectionEventBus;
	}
}

class FilterPresenter extends Presenter{
	//private FilterViewInterface view; //communicates indirect via sectionEventBus
	FilterPresenter(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	private MovieAttribute attribute; // but why?
}

class WorldMapPresenter extends Presenter{
	WorldMapPresenter(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class TablePresenter extends Presenter {
	TablePresenter(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class HeatMapPresenter extends Presenter{
	HeatMapPresenter(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class LoginPresenter extends Presenter{
	LoginPresenter(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class ImportPresenter extends Presenter{
	ImportPresenter(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class StatisticsPresenter extends Presenter{
	StatisticsPresenter(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class ChartPresenter extends Presenter{
	//private ChartViewInterface view; //communicates indirect via section eventbus
	ChartPresenter(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class AdvertisementPresenter extends Presenter{
	AdvertisementPresenter(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}


/*
 * Special Presenter
 * operates threw global event bus
 */
class NavigationPresenter extends Presenter{
	NavigationPresenter(EventBus globalEventBus){
		super(globalEventBus);
	}
}

class YearFilterPresenter extends FilterPresenter {
	YearFilterPresenter(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class LanguageFilterPresenter extends FilterPresenter {
	LanguageFilterPresenter(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class GenreFilterPresenter extends FilterPresenter {
	GenreFilterPresenter(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class CountryFilterPresenter extends FilterPresenter {
	CountryFilterPresenter(EventBus sectionEventBus){
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
class HeatMapModel{
	
}
class MovieCollection{
	Movie[] movies;
}

class FilterCollection{
	MovieAttribute[] filters;
}
