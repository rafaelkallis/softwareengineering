package we.are.bubblesort.MovieApp.shared;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import org.apache.commons.lang3.StringUtils;

public class ExportHelper {
	
	/*
	 * @param filters the filterSet to be encoded into an url-String
	 * @returns String the encoded url-String
	 */
	public static String filterSetToUrlString(UnorderedSet<MovieAttribute> filters) throws UnsupportedEncodingException{
		ArrayList<String> filterUrls = new ArrayList<String>();
		for(MovieAttribute filter : filters){
			filterUrls.add(ExportHelper.filterToUrlString(filter));
		}
		return StringUtils.join(filterUrls, "&");
	}
	
	/*
	 * @param request the url from which we will extract the filters
	 * @returns UnorderedSet<MovieAttribute> the set of filters
	 */
	public static UnorderedSet<MovieAttribute> urlToFilterSet(HttpServletRequest request) throws UnsupportedEncodingException{
		UnorderedSet<MovieAttribute> filterSet = new UnorderedSet<MovieAttribute>();	
		Enumeration headerNames = request.getHeaderNames();
		
		while(headerNames.hasMoreElements()){
			String paramName = (String) headerNames.nextElement();
	        filterSet.add(ExportHelper.urlToFilter(request, paramName));
		}
		return filterSet;
	}
		
	public static String movieCollectionToString(Collection<Movie> movies){
		return null;
	}
	public static Collection<Movie> stringToMovieCollection(String url){
		return null;
	}
	
	/*
	 * @param filter the filter to be encoded
	 * @returns String the encoded filter
	 */
	public static String filterToUrlString(MovieAttribute filter) throws UnsupportedEncodingException{
		if(filter.value.equals(filter.displayName)){
			return URLEncoder.encode(filter.urlName,"UTF-8")+"="+URLEncoder.encode(filter.value, "UTF-8");
		}else{
			return URLEncoder.encode(filter.urlName,"UTF-8")+"="+URLEncoder.encode(filter.value+"|"+filter.displayName, "UTF-8");
		}
	}
	
	/*
	 * @param request the encoded url snippet to be processed
	 * @param paramName name of the header to be processed
	 * @returns MovieAttribute 
	 */
	public static MovieAttribute urlToFilter(HttpServletRequest request, String paramName){
        String[] paramValue = request.getHeader(paramName).split("|", -1);
        return ExportHelper.paramToFilter(paramName, paramValue);
	}
	
	/*
	 * @param paramName the attribute name decoded from the url
	 * @param paramValue the attribute value(s) decoded from the url
	 * @returns MovieAttribute the new filter
	 * @pre paramName,paramValue already decoded
	 */
	public static MovieAttribute paramToFilter(String paramName,String[] paramValue){
		switch(paramName){
			case MovieID.urlName:
				return new MovieID(paramValue[0]);
				
			case MovieTitle.urlName:
				return new MovieTitle(paramValue[0]);
				
			case MovieGenre.urlName:
				return new MovieGenre(paramValue[0],paramValue[1]);
				
			case MovieDuration.urlName:
				return new MovieDuration(paramValue[0]);
				
			case MovieCountry.urlName:
				return new MovieCountry(paramValue[0],paramValue[1]);
				
			case MovieLanguage.urlName:
				return new MovieLanguage(paramValue[0],paramValue[1]);
				
			case MovieYear.urlName:
				return new MovieYear(paramValue[0]);
				
			default:
				return null;
	    }
	}

	public static String toSV(Collection<Movie> movies, String delimiter){
		List<String> join_list = new ArrayList<String>(movies.size());
		for(Movie movie : movies){
			join_list.add(movie.toString(delimiter));
		}
		return StringUtils.join("\n", join_list);
	}
}