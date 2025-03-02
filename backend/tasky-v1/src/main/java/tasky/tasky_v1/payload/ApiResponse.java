package tasky.tasky_v1.payload;

import lombok.Data;
import org.springframework.http.HttpStatus;
import tasky.tasky_v1.model.errorModel.ErrorModel;

import java.util.ArrayList;
import java.util.List;

@Data
public class ApiResponse {
    private HttpStatus httpStatus;
    private Boolean success;
    private String message;
    private List<ErrorModel> subErrors;

    public ApiResponse(){}
    public ApiResponse(HttpStatus httpStatus, Boolean success){
        this.httpStatus = httpStatus;
        this.success = success;
    }
    public ApiResponse(HttpStatus httpStatus, Boolean success, String message){
        this.httpStatus = httpStatus;
        this.success = success;
        this.message = message;
    }
    private void addSubContent(ErrorModel errorModel){
        if(subErrors == null){
            subErrors = new ArrayList<>();
        }
        subErrors.add(errorModel);
    }
    public void addSubErrors(String field, String message, Object rejectedValue){
        this.addSubContent(new ErrorModel(field, message, rejectedValue));
    }
}
