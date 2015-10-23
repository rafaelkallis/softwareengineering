/*
 * Section
 */
public abstract class Section {
	protected Object sectionEventBus;
	Section(Object sectionEventBus){
		this.sectionEventBus = sectionEventBus;
	}
	void ActivateSection(){
		
	}
}

class WorldMapSection extends Section{
	WorldMapSection(Object sectionEventBus){
		super(sectionEventBus);
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
	View(Presenter presenter){
		this.presenter = presenter;
	}
	protected Presenter presenter;
}

class LoginView extends View{
  LoginView(Presenter presenter){
	  super(presenter);
  }
}
class ImportView extends View{
  ImportView(Presenter presenter){
	  super(presenter);
  }
}

//interface FilterViewInterface {
//}
/*	FilterView	*/

abstract class FilterView extends View{
	FilterView(FilterPresenter presenter){
		super(presenter);
	}
}

class RangeSliderView extends FilterView {
	RangeSliderView(FilterPresenter presenter){
		super(presenter);
	}
}
class SelectListView extends FilterView {
	SelectListView(FilterPresenter presenter){
		super(presenter);
	}
}

class SearchBoxView extends FilterView {
	  SearchBoxView(FilterPresenter presenter){
		  super(presenter);
	  }
}

/*	ChartView	*/
abstract class ChartView extends View{
	ChartView(ChartPresenter presenter){
		super(presenter);
	}
}

class PieChartView extends ChartView {
	PieChartView(ChartPresenter presenter){
		super(presenter);
	}
}
class BarChartView extends ChartView {
	BarChartView(ChartPresenter presenter){
		super(presenter);
	}
}

//interface ChartViewInterface {
//}

class AdvertismentView extends View {
	AdvertismentView(AdvertisementPresenter presenter){
		super(presenter);
	}
  //private AdvertisementPresenter presenter;
}
class NavigationView extends View {
	NavigationView(NavigationPresenter presenter){
		super(presenter);
	}
}

class WorldMapView extends View{
	WorldMapView(WorldMapPresenter presenter){
		super(presenter);
	}
}
class TableView extends View{
	TableView(TablePresenter presenter){
		super(presenter);
	}
}
class HeatMapView{
	HeatMapView(HeatMapPresenter presenter){
		super(presenter);
	}
}
class StatisticsView{
	
}
class AdminareaView{
	
}

/*
 * Presenter
 * 
 */

abstract class Presenter{
	protected View view;
	//protected Object SectionEventBus;
}

class FilterPresenter extends Presenter{
	//private FilterViewInterface view; //inherited from Presenter
	private MovieAttribute attribute;
}

class TablePresenter extends Presenter {

}

class LoginPresenter extends Presenter{

}

class ImportPresenter extends Presenter{

}

//TODO heatmappresenter

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
 */

class WorldStatisticsModel{
	
}
class StatisticsModel{
	
}
class FilterModel{
	
}
class MovieCollection{
	
}