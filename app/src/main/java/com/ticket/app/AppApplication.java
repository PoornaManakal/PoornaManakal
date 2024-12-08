package com.ticket.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = {"com.ticket.app"}) // Adjust this if needed
@EntityScan(basePackages = {"com.ticket.app.model"}) // Adjust to your model package
@EnableJpaRepositories(basePackages = {"com.ticket.app.repository"}) // Adjust to your repository package
public class AppApplication {
    public static void main(String[] args) {
        SpringApplication.run(AppApplication.class, args);
    }
}
