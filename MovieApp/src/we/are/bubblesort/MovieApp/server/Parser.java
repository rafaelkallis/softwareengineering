package we.are.bubblesort.MovieApp.server;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import we.are.bubblesort.MovieApp.shared.ImportFormatException;

public class Parser {
	
	private static Parser instance = new Parser();
	public static final String FALLBACK_YEAR = "0";
	public static final Integer LOWER_YEAR_BOUND = 1850;
	private Parser(){
		
	}
	
	/*
	 * @param line the line of text to be parsed
	 * @returns String[] array of all values parsed
	 */
	public static Parser getInstance(){
		return instance;
	}

	/*
	 * @param line the line of text to be parsed
	 * @returns String[] array of all values parsed
	 */
	public String[][] parseTSV(String content) throws IOException, ImportFormatException{
		return parseFormat(content,CSVFormat.TDF.withQuote(null));
	}
	
	/*
	 * @param line the line of text to be parsed
	 * @returns String[] array of all values parsed
	 */
	@Deprecated
	public String[][] parseCSV(String content) throws IOException, ImportFormatException{
		return parseFormat(content,CSVFormat.DEFAULT);
	}
	
	/*
	 * @param line the line of text to be parsed
	 * @returns String[] array of all values parsed
	 */
	@Deprecated
	public String[][] parseExcel(String content) throws IOException, ImportFormatException{
		return parseFormat(content,CSVFormat.EXCEL);
	}
	
	/*
	 * @param line the line of text to be parsed
	 * @param format the format of the tring to be parsed. Used to specify the delimiter
	 * @returns String[] array of all values parsed
	 */
	public String[][] parseFormat(String content,CSVFormat format) throws IOException, ImportFormatException {
		List<CSVRecord> movieRecords;
		try {
			movieRecords = CSVParser.parse((content), format).getRecords();
		} catch (ArrayIndexOutOfBoundsException e) {
			throw new ImportFormatException();
		}
		String records[][] = new String[10][movieRecords.size()];
		Iterator<CSVRecord> iterator = movieRecords.iterator();
		for(int i = 0;iterator.hasNext();i++){
			CSVRecord record = iterator.next();
			
			records[0][i] 				= this.extractWikipediaId	((record.get(0)));
			records[1][i] 				= this.extractFreebaseId	((record.get(1)));
			records[2][i] 				= this.extractTitle			((record.get(2)));
			records[3][i] 				= this.extractDate			((record.get(3)));
			records[4][i] 				= this.extractYear			((record.get(3)));
			records[5][i] 				= this.extractRevenue		((record.get(4)));
			records[6][i] 				= this.extractDuration		((record.get(5)));
			records[7][i] 				= this.extractLanguages		((record.get(6)));
			records[8][i]				= this.extractCountries		((record.get(7)));
			records[9][i]	 			= this.extractGenres		((record.get(8)));
		}
		
		return records;
	}
	
	/*
	 * @param value
	 * @returns String
	 */
	private String extractWikipediaId(String value){
		return value;
	}
	
	/*
	 * @param value
	 * @returns String
	 */
	private String extractFreebaseId(String value){
		return value;
	}
	
	/*
	 * @param value
	 * @returns String
	 */
	private String extractTitle(String value){
    	return value;
    }
    
    /*
	 * @param value
	 * @returns String
	 */
    private String extractDate(String value){
    	return value;
    }
	
	/*
	 * @param value
	 * @returns String
	 * Years below the lower year bound have value 0
	 */
    private String extractYear(String value){    
    	if(value.equals("")){
    		return FALLBACK_YEAR;
    	}else{
    		String year_string = value.subSequence(0, 4).toString();
    		Integer year = Integer.parseInt(year_string);
    		return year.compareTo(LOWER_YEAR_BOUND) < 0 ? FALLBACK_YEAR : year_string;	
    	}
    }
    
    /*
     * @param value
     * @returns String
     */
    private String extractRevenue(String value){
    	return value;
    }
    
    /*
     * @param value
     * @returns String
     */
    private String extractDuration(String value){    	
    	return value;
    }
    
    /*
     * @param value
     * @returns String
     */
    private String extractLanguages(String value){
    	return value.replaceAll("\"/m/[0-9a-zA-Z_]*\": |[\"{}]", "");
    }
    
    /*
     * @param value
     * @returns String
     */
    private String extractCountries(String value){
    	return value.replaceAll("\"/m/[0-9a-zA-Z_]*\": |[\"{}]", "");
    }
    
    /*
     * @param value
     * @returns String
     */
    private String extractGenres(String value){
    	return value.replaceAll("\"/m/[0-9a-zA-Z_]*\": |[\"{}]", "");
    }
}
