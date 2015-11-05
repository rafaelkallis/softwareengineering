package we.are.bubblesort.MovieApp.shared;

import com.google.gwt.user.client.rpc.IsSerializable;

public class WorldStatisticsModelEntry implements IsSerializable,Comparable<WorldStatisticsModelEntry>{
	
	/*
	 * Values of each entry
	 */
	public String 				iso_alpha;
	public Integer 				iso_numeric;
	public Integer 				n_movies;
	public Float				latitude;
	public Float				longitude;
	
	
	public WorldStatisticsModelEntry(){
		
	}
	
	public WorldStatisticsModelEntry(String iso_alpha,Integer iso_numeric,Integer n_movies, Float latitude, Float longitude){
		this.iso_alpha 		= iso_alpha;
		this.iso_numeric 	= iso_numeric;
		this.n_movies 		= n_movies;
		this.latitude		= latitude;
		this.longitude		= longitude;
	}
	
	@Override
	public int compareTo(WorldStatisticsModelEntry e){
		return iso_alpha.compareTo(e.iso_alpha);
	}
}
