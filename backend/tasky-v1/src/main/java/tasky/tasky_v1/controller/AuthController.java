package tasky.tasky_v1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tasky.tasky_v1.dto.SignInDto;
import tasky.tasky_v1.dto.SignUpDto;
import tasky.tasky_v1.model.User;
import tasky.tasky_v1.payload.SignInResponse;
import tasky.tasky_v1.service.AuthService;
import tasky.tasky_v1.service.JwtService;

import java.util.logging.Level;
import java.util.logging.Logger;

@RequestMapping("/auth")
@RestController
public class AuthController {
    private final AuthService authService;
    private final JwtService jwtService;
    private static final Logger LOGGER = Logger.getLogger(AuthController.class.getSimpleName());

    @Autowired
    public AuthController(AuthService authService, JwtService jwtService) {
        this.authService = authService;
        this.jwtService = jwtService;
    }

    @PostMapping("sign-up")
    public ResponseEntity<User> signUp(@RequestBody SignUpDto signUpDto) {
        User registeredUser = authService.signUp(signUpDto);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("sign-in")
    public ResponseEntity<SignInResponse> signIn(@RequestBody SignInDto signInDto) {
        User authUser = authService.authenticate(signInDto);
        String jwtToken = jwtService.generateToken(authUser);

        SignInResponse response = new SignInResponse();
        response.setToken(jwtToken);
        response.setExpiresIn(jwtService.getExpirationTime());
        return ResponseEntity.ok(response);
    }
}
