import React, { useState } from "react";
import authService from "../services/authService";
import "../styles/signupstyle.css";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("customer");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/; // Password must have 8+ characters, 1 uppercase letter, and 1 number
        return regex.test(password);
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!validatePassword(password)) {
            setError("Password must be at least 8 characters long, include at least one uppercase letter and one number.");
            return;
        }

        try {
            const response = await authService.signup(username, password, role);
            setMessage(`Signup successful! Welcome, ${response.data.username}`);
            setError(""); // Clear error after successful signup
        } catch (error) {
            setMessage("Signup failed. Please try again.");
        }
    };

    return (
        <div className="signup-container">
            <h2 className="signup-header">Signup</h2>
            <form className="signup-form" onSubmit={handleSignup}>
                <div className="input-group">
                    <label className="input-label">Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input-field"
                        required
                    />
                </div>
                <div className="input-group">
                    <label className="input-label">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field"
                        required
                    />
                </div>
                <div className="input-group">
                    <label className="input-label">Role:</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="input-field"
                    >
                        <option value="customer">Customer</option>
                        <option value="vendor">Vendor</option>
                    </select>
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="signup-button">Signup</button>
            </form>
            {message && <p className="success-message">{message}</p>}
            <div className="login-prompt">
                <p>Already have an account? <a href="/login" className="login-link">Login</a></p>
            </div>
        </div>
    );
};

export default Signup;
