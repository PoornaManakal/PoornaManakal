import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ConfigurationForm from "./components/ConfigurationForm";
//mport ControlPanel from "./components/ControlPanel";
import LogDisplay from './components/LogDisplay';
import TicketStatus from './components/TicketStatus';
import Homepage from './components/Homepage';
// import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {


    return (
        <Router>
            {/* <Header/> */}
            <Routes>
                {/* Default route set to signup */}
                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/configform" element={<ConfigurationForm />} />
                {/* <Route path="/controlPanel" element={<ControlPanel startSystem={startSystem} stopSystem={stopSystem} />} /> */}
                <Route path="/logDisplay" element={<LogDisplay />} />
                <Route path="/ticketStatus" element={<TicketStatus />} />
            </Routes>
            {/* <Footer/> */}
        </Router>
    );
}

export default App;
