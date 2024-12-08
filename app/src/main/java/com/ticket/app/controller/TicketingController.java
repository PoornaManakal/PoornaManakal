package com.ticket.app.controller;


import com.ticket.app.service.TicketingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tickets")
public class TicketingController {

    @Autowired
    private TicketingService ticketingService;

    // Start the system with user-provided parameters
    @PostMapping("/start")
    public String startSystem(@RequestParam int totalTickets,
                              @RequestParam int ticketReleaseRate,
                              @RequestParam int customerRetrievalRate,
                              @RequestParam int maxTicketCapacity) {
        ticketingService.startSystem(totalTickets, ticketReleaseRate, customerRetrievalRate, maxTicketCapacity);
        return "Ticketing system started with the provided parameters!";
    }

    // Stop the system
    @PostMapping("/stop")
    public String stopSystem() {
        ticketingService.stopSystem();
        return "Ticketing system stopped.";
    }

    // Fetch the current ticket pool status
    @GetMapping("/status")
    public String getTicketStatus() {
        return ticketingService.getTicketStatus();
    }
}
