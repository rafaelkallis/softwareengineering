import java.util.HashSet;

/*
 * Section
 */

/*
 * Dependencies:
 * 	GlobalEventBus
 */
public abstract class Section{
	protected EventBus sectionEventBus;
	protected EventBus globalEventBus;
	
	Section(EventBus globalEventBus){
		this.sectionEventBus 	= new EventBus();
		this.globalEventBus 	= globalEventBus;
	}
	abstract void activateSection();
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
		this.worldMapPresenter 		= new WorldMapPresenter(this.sectionEventBus,this.globalEventBus);
		
		this.genreFilterView 		= new SelectListView(this.sectionEventBus);
		this.genreFilterPresenter 	= new GenreFilterPresenter(this.sectionEventBus,this.globalEventBus);
		
		this.countryFilterView		= new SelectListView(this.sectionEventBus);
		this.countryFilterPresenter	= new CountryFilterPresenter(this.sectionEventBus,this.globalEventBus);
		
		this.languageFilterView		= new SelectListView(this.sectionEventBus);
		this.languageFilterPresenter= new LanguageFilterPresenter(this.sectionEventBus,this.globalEventBus);
		
		this.rangeSliderView		= new RangeSliderView(this.sectionEventBus);
		this.rangeSliderPresenter	= new YearFilterPresenter(this.sectionEventBus,this.globalEventBus);
	}
	void activateSection(){
		// Nothing To do
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
		this.tablePresenter			= new TablePresenter(this.sectionEventBus,this.globalEventBus);
		
		this.genreFilterView 		= new SelectListView(this.sectionEventBus);
		this.genreFilterPresenter 	= new GenreFilterPresenter(this.sectionEventBus,this.globalEventBus);
		
		this.countryFilterView		= new SelectListView(this.sectionEventBus);
		this.countryFilterPresenter	= new CountryFilterPresenter(this.sectionEventBus,this.globalEventBus);
		
		this.languageFilterView		= new SelectListView(this.sectionEventBus);
		this.languageFilterPresenter= new LanguageFilterPresenter(this.sectionEventBus,this.globalEventBus);
		
		this.yearFilterView			= new SelectListView(this.sectionEventBus);
		this.yearFilterPresenter	= new YearFilterPresenter(this.sectionEventBus,this.globalEventBus);
	}
	void activateSection(){
		// Nothing To do
	}
}
final class HeatMapSection extends Section{
	HeatMapSection(EventBus globalEventBus){
		super(globalEventBus);
	}
	void activateSection(){
		// Nothing To do
	}
}
final class StatisticsSection extends Section{
	StatisticsSection(EventBus globalEventBus){
		super(globalEventBus);
	}
	void activateSection(){
		// Nothing To do
	}
}
final class AdminareaSection extends Section{
	AdminareaSection(EventBus globalEventBus){
		super(globalEventBus);
	}
	void activateSection(){
		// Nothing To do

	}
}

/*		
 * 										fire local events |	fire global events | handle events
 * Section Object:	 							[x]					[ ]				[ ]
 * SectionObjectWithGlobalEventBus:				[x]					[x]      		[ ]
 * HandlingSectionObject:						[x]					[ ]				[x]
 * HandlingSectionObjectWithGlobalEventBus:		[x]					[x]				[x]
 */

abstract class SectionObject{
	EventBus sectionEventBus;
	SectionObject(EventBus sectionEventBus){
		this.sectionEventBus = sectionEventBus;
	}
}

abstract class SectionObjectWithGlobalEventBus extends SectionObject{
	EventBus globalEventBus;
	SectionObjectWithGlobalEventBus(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus);
	}
}

abstract class HandlingSectionObject extends SectionObject implements EventHandleable{
	HandlingSectionObject(EventBus sectionEventBus){
		super(sectionEventBus);
		this.sectionEventBus.bind(this);
	}
	public abstract void handleEvent(Event e);
}

abstract class HandlingSectionObjectWithGlobalEventBus extends SectionObjectWithGlobalEventBus implements EventHandleable{
	HandlingSectionObjectWithGlobalEventBus(EventBus sectionEventBus, EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
		this.sectionEventBus.bind(this);
		this.globalEventBus.bind(this);
	}
	public abstract void handleEvent(Event e);
}



/*
 * Views
 */

class ImportView extends HandlingSectionObject{
	ImportView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		//handle event here
	}
}

abstract class FilterView extends SectionObject{
	FilterView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class RangeSliderView extends SectionObject{
	RangeSliderView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}
class SelectListView extends SectionObject {
	SelectListView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class SearchBoxView extends SectionObject {
	  SearchBoxView(EventBus sectionEventBus){
			super(sectionEventBus);
	}
}

/*	ChartView	*/

abstract class ChartView extends HandlingSectionObject{
	ChartView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class PieChartView extends ChartView {
	PieChartView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		// TODO handle event here
	}
}
class BarChartView extends ChartView {
	BarChartView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		// TODO handle event here
	}
}

class AdvertismentView extends SectionObject {
	AdvertismentView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}
class NavigationView extends SectionObjectWithGlobalEventBus {
	NavigationView(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
}

class WorldMapView extends HandlingSectionObject{
	WorldMapView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		// Handle event here
	}
}

class TableView extends HandlingSectionObject{
	TableView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}
class HeatMapView extends HandlingSectionObject{
	HeatMapView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}
class StatisticsView extends HandlingSectionObject{
	StatisticsView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}
class AdminareaView extends HandlingSectionObject{
	AdminareaView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

/*
 * Presenter
 */

class FilterPresenter extends HandlingSectionObjectWithGlobalEventBus{
	FilterPresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class WorldMapPresenter extends HandlingSectionObjectWithGlobalEventBus{
	WorldMapPresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class TablePresenter extends HandlingSectionObjectWithGlobalEventBus {
	TablePresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class HeatMapPresenter extends HandlingSectionObjectWithGlobalEventBus{
	HeatMapPresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

/*class LoginPresenter extends HandlingSectionObjectWithGlobalEventBus{
	LoginPresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
}*/

/*class ImportPresenter extends HandlingSectionObjectWithGlobalEventBus{
	ImportPresenter(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}*/

class AdminareaPresenter extends HandlingSectionObjectWithGlobalEventBus{
	AdminareaPresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class StatisticsPresenter extends HandlingSectionObjectWithGlobalEventBus{
	StatisticsPresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class ChartPresenter extends HandlingSectionObjectWithGlobalEventBus{
	ChartPresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class AdvertisementPresenter extends HandlingSectionObjectWithGlobalEventBus{
	AdvertisementPresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class NavigationPresenter implements EventHandleable{
	EventBus globalEventBus;
	NavigationPresenter(EventBus globalEventBus){
		this.globalEventBus = globalEventBus;
		this.globalEventBus.bind(this);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class YearFilterPresenter extends HandlingSectionObjectWithGlobalEventBus {
	YearFilterPresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class LanguageFilterPresenter extends HandlingSectionObjectWithGlobalEventBus {
	LanguageFilterPresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class GenreFilterPresenter extends HandlingSectionObjectWithGlobalEventBus {
	GenreFilterPresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus, globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class CountryFilterPresenter extends HandlingSectionObjectWithGlobalEventBus {
	CountryFilterPresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

/*
 * Model
 */

class WorldStatisticsModel extends HandlingSectionObject{
	WorldStatisticsModel(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}
class StatisticsModel extends HandlingSectionObject{
	StatisticsModel(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}
class HeatMapModel extends HandlingSectionObject{
	HeatMapModel(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}
class MovieCollection extends HandlingSectionObject{
	MovieCollection(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
	Movie[] movies;
}

class FilterCollection extends HandlingSectionObject{
	FilterCollection(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
	MovieAttribute[] filters;
}
