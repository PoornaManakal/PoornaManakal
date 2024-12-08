import React from "react";
import '../styles/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2024 Ticket Pool System. All rights reserved.</p>
            <p>
                Need help? <a href="/contact" className="footer-link">Contact Us</a>
            </p>
        </footer>
    );
}

export default Footer;
