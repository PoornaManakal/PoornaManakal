import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styles/configform.css';
import { Link } from "react-router-dom";
import LogDisplay from "./LogDisplay";

const ConfigurationForm = ({ onStart }) => {
  const [totalTickets, setTotalTickets] = useState("");
  const [ticketReleaseRate, setTicketReleaseRate] = useState("");
  const [customerRetrievalRate, setCustomerRetrievalRate] = useState("");
  const [maxTicketCapacity, setMaxTicketCapacity] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8080/api/tickets/start?totalTickets=${totalTickets}&ticketReleaseRate=${ticketReleaseRate}&customerRetrievalRate=${customerRetrievalRate}&maxTicketCapacity=${maxTicketCapacity}`
      );

      console.log(response.data);
      toast.success("System started successfully!");
      if (typeof onStart === "function") {
        onStart(totalTickets, ticketReleaseRate, customerRetrievalRate, maxTicketCapacity);
      }
    } catch (error) {
      console.error("Error starting the system:", error);
      toast.error("Failed to start the system.");
    }
  };

  const handleStop = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/tickets/stop");
      console.log(response.data);
      toast.success("System stopped successfully!");
    } catch (error) {
      console.error("Error stopping the system:", error);
      toast.error("Failed to stop the system.");
    }
  };

  return (
    <div className="config-container">
      <div className="log-display-container">
        <LogDisplay />
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="configuration-form">
          <h2 className="form-header">Configure Ticket Pool System</h2>
          
          <div className="form-group">
            <label htmlFor="totalTickets" className="form-label">Total Tickets:</label>
            <input
              type="number"
              id="totalTickets"
              value={totalTickets}
              onChange={(e) => setTotalTickets(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="ticketReleaseRate" className="form-label">Ticket Release Rate (sec):</label>
            <input
              type="number"
              id="ticketReleaseRate"
              value={ticketReleaseRate}
              onChange={(e) => setTicketReleaseRate(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="customerRetrievalRate" className="form-label">Customer Retrieval Rate (sec):</label>
            <input
              type="number"
              id="customerRetrievalRate"
              value={customerRetrievalRate}
              onChange={(e) => setCustomerRetrievalRate(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="maxTicketCapacity" className="form-label">Max Ticket Capacity:</label>
            <input
              type="number"
              id="maxTicketCapacity"
              value={maxTicketCapacity}
              onChange={(e) => setMaxTicketCapacity(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn-start">Start System</button>
            <button type="button" onClick={handleStop} className="btn-stop">Stop System</button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ConfigurationForm;
