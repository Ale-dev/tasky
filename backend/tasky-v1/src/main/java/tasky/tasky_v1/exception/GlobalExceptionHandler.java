package tasky.tasky_v1.exception;

import io.jsonwebtoken.MalformedJwtException;
import jakarta.persistence.EntityNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import tasky.tasky_v1.payload.ApiResponse;

import java.nio.file.AccessDeniedException;
import java.security.SignatureException;
import java.util.logging.Logger;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ApiResponse> BadCredentialsExceptionHandler(BadCredentialsException ex){
        String message = ex.getMessage();
        ApiResponse error = new ApiResponse(HttpStatus.valueOf(401), false, message);
        return new ResponseEntity<>(error, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ApiResponse> EntityNotFoundExceptionHandler(EntityNotFoundException ex){
        String message = ex.getMessage();
        ApiResponse apiResponse = new ApiResponse(HttpStatus.NOT_FOUND, Boolean.FALSE, message);
        return new ResponseEntity<>(apiResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ApiResponse> AccessDeniedExceptionHandler(AccessDeniedException ex){
        String message = ex.getMessage();
        ApiResponse apiResponse = new ApiResponse(HttpStatus.FORBIDDEN, Boolean.FALSE, message);
        return new ResponseEntity<>(apiResponse, HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(SignatureException.class)
    public ResponseEntity<ApiResponse> SignatureExceptionHandler(SignatureException ex){
        String message = ex.getMessage();
        ApiResponse apiResponse = new ApiResponse(HttpStatus.FORBIDDEN, Boolean.FALSE, message);
        return new ResponseEntity<>(apiResponse, HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(MalformedJwtException.class)
    public ResponseEntity<ApiResponse> MalformedJwtExceptionHandler(MalformedJwtException ex){
        String message = ex.getMessage();
        ApiResponse apiResponse = new ApiResponse(HttpStatus.FORBIDDEN, Boolean.FALSE, message);
        return new ResponseEntity<>(apiResponse, HttpStatus.FORBIDDEN);
    }
}
