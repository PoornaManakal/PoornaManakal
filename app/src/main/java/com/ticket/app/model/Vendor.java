package com.ticket.app.model;

public class Vendor implements Runnable {
    private final TicketPool ticketPool;
    private final int ticketReleaseRate;

    public Vendor(TicketPool ticketPool, int ticketReleaseRate) {
        this.ticketPool = ticketPool;
        this.ticketReleaseRate = ticketReleaseRate;
    }

    @Override
    public void run() {
        while (!Thread.currentThread().isInterrupted()) {  // Check if thread is interrupted
            if (ticketPool.getTicketCount() < ticketPool.getMaxTicketCapacity()) {
                ticketPool.getMaxTicketCapacity();  // Use the correct method name
                System.out.println("Vendor added a ticket. Total tickets: " + ticketPool.getTicketCount());
            }
            try {
                Thread.sleep(ticketReleaseRate * 1000); // Sleep for the ticket release rate
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt(); // Preserve the interrupt status
            }
        }
    }
}
