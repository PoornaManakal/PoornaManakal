// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import '../styles/home.css'; // Make sure to add a CSS file for styling

function HomePage() {
    return (
        <div className="home-container">
            <header className="header">
                <h1>Welcome to the Ticket Pool System</h1>
                <p>Your one-stop solution for managing event ticketing in real-time.</p>
            </header>

            <nav className="nav-links">
                
                {/* <Link to="/signup" className="nav-link">Sign Up</Link> */}
                <Link to="/configform" className="nav-link">Configure System</Link>
                <Link to="/logDisplay" className="nav-link">View Logs</Link>
                <Link to="/ticketStatus" className="nav-link">Ticket Status</Link>
            </nav>
        </div>
    );
}

export default HomePage;
