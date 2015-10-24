import java.util.HashSet;

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
	//protected AppController appController;
	
	Section(Object globalEventBus){
		this.sectionEventBus = new Object(); //FIXME: contructor of sectionEventBus
		this.globalEventBus = globalEventBus;
	}
	abstract void activateSection();
	abstract void fireEvent(Object event);
	abstract void eventHandler(Object event);
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
	
	WorldMapSection(Object globalEventBus){
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
	void fireEvent(Object event){
		// Do something
	}
	 void eventHandler(Object event){
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
	
	TableSection(Object globalEventBus){
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
	void fireEvent(Object event){
		// Do something
	}
	 void eventHandler(Object event){
		// Handle event
	}
}
final class HeatMapSection extends Section{
	HeatMapSection(Object globalEventBus){
		super(globalEventBus);
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
final class StatisticsSection extends Section{
	StatisticsSection(Object globalEventBus){
		super(globalEventBus);
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
final class AdminareaSection extends Section{
	AdminareaSection(Object globalEventBus){
		super(globalEventBus);
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
	BarChartView(Object sectionEventBus){
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
class HeatMapModel{
	
}
class MovieCollection{
	Movie[] movies;
}

class FilterCollection{
	MovieAttribute[] filters;
}
