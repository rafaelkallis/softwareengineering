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
	 * @param queryString the String from request.getQueryString()
	 * @returns UnorderedSet<MovieAttribute> the set of filters
	 */
	public static UnorderedSet<MovieAttribute> queryStringToFilterSet(String queryString) throws UnsupportedEncodingException{
		UnorderedSet<MovieAttribute> filterSet = new UnorderedSet<MovieAttribute>();	

		String[] queryParameters = queryString.split("&", -1);
		
		for(String queryparameter : queryParameters){
			String[] name_value = queryparameter.split("=", -1);
			String[] value_displayName = name_value[1].split("|", -1);
			filterSet.add(ExportHelper.paramToFilter(name_value[0], value_displayName));
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
			join_list.add(movie.toJoinedString(delimiter));
		}
		return StringUtils.join("\n", join_list);
	}
}