import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import "../styles/loginstyles.css";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("customer");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await authService.login(username, password, role);
            setMessage(response.data);
            navigate("/home"); // Redirect to home after successful login
        } catch (error) {
            setMessage("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-header">Login</h2>
            <form className="login-form" onSubmit={handleLogin}>
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
                        id="selectop"
                    >
                        <option value="customer">Customer</option>
                        <option value="vendor">Vendor</option>
                    </select>
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            {message && <p className="error-message">{message}</p>}
            <div className="signup-prompt">
                <p>Don't have an account? <a href="/signup" className="signup-link">Sign up</a></p>
            </div>
        </div>
    );
};

export default Login;
