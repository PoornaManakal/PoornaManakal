import React from "react";
import '../styles/header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="myheader">
            <div className="header-content">
                <h1>Welcome to the Ticket Pool System</h1>
                <p>Your one-stop solution for managing event ticketing in real-time.</p>
                <Link to="/login" className="logout">Login</Link>
            </div>
        </header>
    );
}

export default Header;
