package com.ticket.app.model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class TicketPool {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generate primary key
    private Long id; // Primary key

    @ElementCollection
    @CollectionTable(name = "ticket_pool_tickets", joinColumns = @JoinColumn(name = "pool_id"))
    @Column(name = "ticket_id")
    private List<Integer> tickets = new ArrayList<>(); // Changed to List for JPA compatibility

    private int maxTicketCapacity; // Maximum capacity of the ticket pool

    // Default constructor required by JPA
    public TicketPool() {}

    // Constructor to initialize tickets and capacity
    public TicketPool(int totalTickets, int maxTicketCapacity) {
        this.maxTicketCapacity = maxTicketCapacity;
        for (int i = 0; i < totalTickets; i++) {
            tickets.add(i); // Initialize ticket IDs
        }
    }

    // Add a ticket to the pool
    public boolean addTicket(int ticketId) {
        if (tickets.size() < maxTicketCapacity) {
            tickets.add(ticketId);
            return true;
        }
        return false;
    }

    // Remove a ticket from the pool
    public Integer removeTicket() {
        if (!tickets.isEmpty()) {
            return tickets.remove(0); // Remove the first ticket (FIFO)
        }
        return null;
    }

    // Get the current ticket count
    public int getTicketCount() {
        return tickets.size();
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public int getMaxTicketCapacity() {
        return maxTicketCapacity;
    }

    public void setMaxTicketCapacity(int maxTicketCapacity) {
        this.maxTicketCapacity = maxTicketCapacity;
    }

    public List<Integer> getTickets() {
        return tickets;
    }

    public void setTickets(List<Integer> tickets) {
        this.tickets = tickets;
    }
}
