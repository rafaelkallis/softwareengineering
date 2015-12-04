package we.are.bubblesort.MovieApp.shared;


@SuppressWarnings("serial")
public class ImportException extends Exception {

	private ImportResultCode errorCode;
	
	public ImportException() {
		this("");
	}

	public ImportException(ImportResultCode errorCode){
		super();
		this.errorCode = errorCode;
	}
	
	public ImportException(String message) {
		this(message, ImportResultCode.OTHER);
	}
	
	public ImportException(String message, ImportResultCode errorCode) {
		super(message);
		this.errorCode = errorCode;
	}
	
	public ImportResultCode getImportResultCode(){
		return this.errorCode;
	}

}
