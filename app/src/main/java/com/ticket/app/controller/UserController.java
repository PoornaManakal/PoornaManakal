package com.ticket.app.controller;

import com.ticket.app.model.User;
import com.ticket.app.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Create user (Sign Up)
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return ResponseEntity.ok(userRepository.save(user));
    }

    // Login functionality (Check username and password)
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password, @RequestParam String role) {
        Optional<User> user = userRepository.findByUsername(username);

        if (user.isEmpty()) {
            return ResponseEntity.status(404).body("User not found");
        }

        // Check if the password matches
        if (!user.get().getPassword().equals(password)) {
            return ResponseEntity.status(400).body("Invalid password");
        }

        // Check if the role matches
        if (!user.get().getRole().equals(role)) {
            return ResponseEntity.status(400).body("Role mismatch");
        }

        return ResponseEntity.ok("Login successful");
    }

    // Other methods...
}
