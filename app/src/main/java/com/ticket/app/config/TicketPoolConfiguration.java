package com.ticket.app.config;

import com.ticket.app.model.TicketPool;
import com.ticket.app.model.Vendor;
import com.ticket.app.model.CustomerThread;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TicketPoolConfiguration {

    @Bean
    public TicketPool ticketPool() {
        return new TicketPool(100, 200); // Default: 100 tickets, 200 max capacity
    }

    @Bean
    public Vendor vendor(TicketPool ticketPool) {
        return new Vendor(ticketPool, 5); // Default: 5 seconds ticket release rate
    }

    @Bean
    public CustomerThread customerThread(TicketPool ticketPool) {
        return new CustomerThread(ticketPool, 3); // Default: 3 seconds customer retrieval rate
    }
}
