// src/components/TicketStatus.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const TicketStatus = () => {
    const [ticketCount, setTicketCount] = useState(0);

    useEffect(() => {
        const fetchTicketStatus = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/tickets/status");
                setTicketCount(response.data);
            } catch (error) {
                console.error("Error fetching ticket status", error);
            }
        };

        fetchTicketStatus();
        const intervalId = setInterval(fetchTicketStatus, 5000); // Poll every 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h3>Current Ticket Status</h3>
            <p>Tickets available: {ticketCount}</p>
        </div>
    );
};

export default TicketStatus;
