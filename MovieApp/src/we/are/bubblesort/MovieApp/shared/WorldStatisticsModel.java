package we.are.bubblesort.MovieApp.shared;

import java.util.Iterator;
import com.google.gwt.user.client.rpc.IsSerializable;
import we.are.bubblesort.MovieApp.shared.WorldStatisticsModelEntry;

public class WorldStatisticsModel extends Model implements IsSerializable,Iterable<WorldStatisticsModelEntry>{
	
	/*
	 * Implements ordered set, so can be iterated in-order
	 */
	public OrderedSet<WorldStatisticsModelEntry> model = new OrderedSet<WorldStatisticsModelEntry>();
	
	/*
	 * Database Labels
	 */
	public static final String	iso_alpha_DbLabelName 	= "iso3166-1-alpha-2";
	public static final String 	iso_numeric_DbLabelName = "iso3166-1-numeric";
	public static final String 	n_movies_DbLabelName 	= "NumberOfMovies";
	public static final String 	latitude_DbLabelName	= "center-lat";
	public static final String 	longitude_DbLabelName	= "center-long";

	public WorldStatisticsModel(){
		super();
	}

	public void add(WorldStatisticsModelEntry new_entry){
		model.add(new_entry);
	}

	/*
	 * (non-Javadoc)
	 * @see java.lang.Iterable#iterator()
	 */
	@Override
	public Iterator<WorldStatisticsModelEntry> iterator() {
		return model.iterator();
	}
}
