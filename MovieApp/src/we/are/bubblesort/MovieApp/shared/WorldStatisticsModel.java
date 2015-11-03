package we.are.bubblesort.MovieApp.shared;

import java.util.Iterator;
import com.google.gwt.user.client.rpc.IsSerializable;

public class WorldStatisticsModel extends Model implements IsSerializable,Iterable<WorldStatisticsModel.WorldStatisticsModelEntry>{
	
	/*
	 * Implements ordered set, so can be iterated in-order
	 */
	public OrderedSet<WorldStatisticsModelEntry> model = new OrderedSet<WorldStatisticsModelEntry>();
	

	public WorldStatisticsModel(){
		super();
	}
	
	public class WorldStatisticsModelEntry implements IsSerializable,Comparable<WorldStatisticsModelEntry>{
		
		/*
		 * Values of each entry
		 */
		String 						iso_alpha;
		Integer 					iso_numeric;
		Integer 					n_movies;
		
		/*
		 * Database Labels
		 */
		public static final String	iso_alpha_DbLabelName 	= "iso3166-1-alpha-2";
		public static final String 	iso_numeric_DbLabelName = "iso3166-1-numeric";
		public static final String 	n_movies_DbLabelName 	= "NumberOfMovies";
		
		public WorldStatisticsModelEntry(){
			
		}
		
		public WorldStatisticsModelEntry(String iso_alpha,Integer iso_numeric,Integer n_movies){
			this.iso_alpha 		= iso_alpha;
			this.iso_numeric 	= iso_numeric;
			this.n_movies 		= n_movies;
		}
		
		@Override
		public int compareTo(WorldStatisticsModelEntry e){
			return iso_alpha.compareTo(e.iso_alpha);
		}
	}
	
	public void add(WorldStatisticsModelEntry new_entry){
		model.add(new_entry);
	}

	/*
	 * (non-Javadoc)
	 * @see java.lang.Iterable#iterator()
	 */
	@Override
	public Iterator<WorldStatisticsModel.WorldStatisticsModelEntry> iterator() {
		return model.iterator();
	}
}
