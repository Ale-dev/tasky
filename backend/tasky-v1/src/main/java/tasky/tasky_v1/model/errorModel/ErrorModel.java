package tasky.tasky_v1.model.errorModel;

import lombok.Data;

@Data
public class ErrorModel {
    private String field;
    private String message;
    private Object rejectedValue;

    public ErrorModel(String field, String message, Object rejectedValue){
        this.field = field;
        this.message = message;
        this.rejectedValue = rejectedValue;
    }
}
