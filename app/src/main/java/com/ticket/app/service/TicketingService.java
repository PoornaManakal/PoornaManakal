package com.ticket.app.service;

import com.ticket.app.model.TicketPool;
import com.ticket.app.model.Vendor;
import com.ticket.app.model.CustomerThread;
import org.springframework.stereotype.Service;

@Service
public class TicketingService {

    private TicketPool ticketPool;
    private Vendor vendor;
    private CustomerThread customer;
    private Thread vendorThread;
    private Thread customerThread;

    // Start the system with user-provided parameters
    public void startSystem(int totalTickets, int ticketReleaseRate, int customerRetrievalRate, int maxTicketCapacity) {
        ticketPool = new TicketPool(totalTickets, maxTicketCapacity);


        vendor = new Vendor(ticketPool, ticketReleaseRate);
        customer = new CustomerThread(ticketPool, customerRetrievalRate);

        vendorThread = new Thread(vendor);
        customerThread = new Thread(customer);

        vendorThread.start();
        customerThread.start();

        System.out.println("System started with:");
        System.out.println("Total Tickets: " + totalTickets);
        System.out.println("Ticket Release Rate: " + ticketReleaseRate + " seconds");
        System.out.println("Customer Retrieval Rate: " + customerRetrievalRate + " seconds");
        System.out.println("Maximum Ticket Capacity: " + maxTicketCapacity);
    }

    // Stop the system
    public void stopSystem() {
        if (vendorThread != null && vendorThread.isAlive()) {
            vendorThread.interrupt(); // Interrupt the vendor thread
        }
        if (customerThread != null && customerThread.isAlive()) {
            customerThread.interrupt(); // Interrupt the customer thread
        }
        System.out.println("System stopped.");
    }

    // Get the current ticket count
    public String getTicketStatus() {
        if (ticketPool == null) {
            return "Ticket pool is not initialized.";
        }
        return "Tickets available: " + ticketPool.getTicketCount();
    }
}
