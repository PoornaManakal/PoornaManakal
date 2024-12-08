package com.ticket.app.service;

import com.ticket.app.model.User;
import com.ticket.app.repository.UserRepository;
import org.springframework.stereotype.Service;



@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }
}
