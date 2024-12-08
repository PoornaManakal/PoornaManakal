package com.ticket.app.model;

public class CustomerThread implements Runnable {
    private final TicketPool ticketPool;
    private final int customerRetrievalRate;

    public CustomerThread(TicketPool ticketPool, int customerRetrievalRate) {
        this.ticketPool = ticketPool;
        this.customerRetrievalRate = customerRetrievalRate;
    }

    @Override
    public void run() {
        while (!Thread.currentThread().isInterrupted()) { // Check if thread is interrupted
            Integer ticket = ticketPool.removeTicket();
            if (ticket != null) {
                System.out.println("Customer purchased ticket: " + ticket);
            } else {
                System.out.println("No tickets available, customer waiting...");
            }
            try {
                Thread.sleep(customerRetrievalRate * 1000); // Sleep for the retrieval rate
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt(); // Preserve the interrupt status
            }
        }
    }
}
