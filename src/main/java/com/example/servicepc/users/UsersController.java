package com.example.servicepc.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody Users user) {
        usersService.registerUser(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> loginUser(@RequestBody Users user) {
        Users foundUser = usersService.findUserByUsername(user.getUsername());
        if (foundUser != null && new BCryptPasswordEncoder().matches(user.getPassword(), foundUser.getPassword())) {
            // Create a LoginResponse with the message and user info
            System.out.println(foundUser.getId()+ " "+foundUser.getUsername());
            LoginResponse loginResponse = new LoginResponse("Login successful!", foundUser);
            System.out.println("LoginResponse: " + loginResponse.getMessage());
            System.out.println(loginResponse.getUser().toString());
            return ResponseEntity.ok(loginResponse); // Return the LoginResponse
        }
        return ResponseEntity.status(401).body(new LoginResponse("Invalid credentials", null)); // Return invalid response
    }
    @GetMapping("/details/{username}")
    public ResponseEntity<Users> getUserDetails(@PathVariable String username) {
        Users user = usersService.findUserByUsername(username);
        if (user != null) {
            // Răspunsul este returnat automat în format JSON
            return ResponseEntity.ok(user); // Răspunsul utilizatorului în format JSON
        } else {
            return ResponseEntity.notFound().build(); // Răspuns 404 dacă utilizatorul nu este găsit
        }
    }
    // UsersController.java
    @GetMapping("/check-username/{username}")
    public ResponseEntity<String> checkUsername(@PathVariable String username) {
        long userCount = usersService.countUsersByUsername(username);
        if (userCount > 0) {
            return ResponseEntity.status(400).body("Username already exists.");
        } else {
            return ResponseEntity.ok("Username is available.");
        }
    }
    @GetMapping("/{username}/status")
    public ResponseEntity<String> getStatus(@PathVariable String username) {
        try {
            String status = usersService.getStatusByUsername(username);
            return ResponseEntity.ok(status);
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PostMapping("/send-verification")
    public ResponseEntity<?> sendVerification(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        usersService.sendVerificationEmail(username);
        return ResponseEntity.ok(Map.of("message", "Verification email sent successfully!"));
    }

    @PutMapping("/verify")
    public String verifyUser(@RequestParam String username) {
        try {
            usersService.verifyUser(username);
            return "User " + username + " has been verified successfully.";
        } catch (IllegalArgumentException e) {
            return e.getMessage();
        }
    }
    @GetMapping("/{username}/id")
    public ResponseEntity<Long> getUserIdByUsername(@PathVariable String username) {
        Users user = usersService.findUserByUsername(username);
        if (user != null) {
            return ResponseEntity.ok(user.getId()); // Return the user ID
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // Return 404 if user is not found
        }
    }

}
