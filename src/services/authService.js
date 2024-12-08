import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

// Signup API call
const signup = (username, password, role) => {
    return axios.post(API_URL, {
        username,
        password,
        role,
    });
};

// Login API call (POST request)
const login = (username, password, role) => {
    return axios.post(`${API_URL}/login`, null, {
        params: { username, password, role }
    }).then((response) => {
        return { data: response.data };  // Return the success message from the backend
    }).catch((error) => {
        // Improved error handling with detailed message
        const errorMessage = error.response?.data || "Login failed. Please check your credentials.";
        throw new Error(errorMessage);
    });
};

export default {
    signup,
    login,
};
