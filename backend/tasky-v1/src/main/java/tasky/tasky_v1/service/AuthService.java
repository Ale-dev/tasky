package tasky.tasky_v1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tasky.tasky_v1.dto.SignInDto;
import tasky.tasky_v1.dto.SignUpDto;
import tasky.tasky_v1.model.User;
import tasky.tasky_v1.repository.UserRepository;

import java.util.UUID;

@Service
public class AuthService {
    private  final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public AuthService(UserRepository userRepository, AuthenticationManager authenticationManager, PasswordEncoder passwordEncoder){
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
    }

    public User signUp(SignUpDto signUpDto){
        User user = new User();
        user.setUserId(UUID.randomUUID().toString());
        user.setEmail(signUpDto.getEmail());
        user.setPassword(passwordEncoder.encode(signUpDto.getPassword()));
        return userRepository.save(user);
    }

    public User authenticate(SignInDto signInDto){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        signInDto.getEmail(),
                        signInDto.getPassword()
                )
        );
        return userRepository.findByEmail(signInDto.getEmail()).orElseThrow();
    }
}
