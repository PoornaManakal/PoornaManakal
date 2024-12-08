package com.ticket.app.repository;


import com.ticket.app.model.TicketPool;  // This should be removed from repository if not used
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketPoolRepository extends JpaRepository<TicketPool, Long> {
    // You can remove or comment this repository out as TicketPool should not be a JPA entity
}
