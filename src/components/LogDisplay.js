import React, { useState, useEffect } from "react";
import axios from "axios";
 import '../styles/Logdashboed.css'; // Importing CSS for styles

const LogDisplay = () => {
    const [ticketAvailability, setTicketAvailability] = useState(null);

    // Fetch ticket availability every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            axios.get("http://localhost:8080/api/tickets/status")
                .then(response => {
                    setTicketAvailability(response.data);
                    //console.log(response.data);
                })
                .catch(error => console.error("Error fetching ticket availability", error));
        }, 999);

        return () => clearInterval(intervalId);  // Cleanup on unmount
    }, []);

    return (
        <div className="log-display-container">
            <div className="ticket-availability-box">
                <h4 className="ticket-header">Real-Time Ticket Availability</h4>
                {ticketAvailability !== null ? (
                    <div className="ticket-availability">
                        <h3 className="ticket-available">{`Tickets available: ${ticketAvailability}`}</h3>
                    </div>
                ) : (
                    <p className="loading-message">Loading ticket availability...</p>
                )}
            </div>
        </div>
    );
};

export default LogDisplay;
