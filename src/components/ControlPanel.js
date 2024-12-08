// import React from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ControlPanel = ({ startSystem }) => {

//     // Function to start the system
//     const handleStart = () => {
//         const totalTickets = prompt("Enter Total Tickets:");
//         const ticketReleaseRate = prompt("Enter Ticket Release Rate (seconds):");
//         const customerRetrievalRate = prompt("Enter Customer Retrieval Rate (seconds):");
//         const maxTicketCapacity = prompt("Enter Maximum Ticket Capacity:");
        
//         startSystem(totalTickets, ticketReleaseRate, customerRetrievalRate, maxTicketCapacity);
//     };

//     // Function to stop the system by making a POST request
//     const handleStop = async () => {
//         try {
//             const response = await axios.post("http://localhost:8080/api/tickets/stop");
//             console.log(response.data); // This should log the response from the backend
//             toast.success("System stopped successfully!"); // Show success toast notification
//         } catch (error) {
//             console.error("Error stopping the system:", error);
//             toast.error("Failed to stop the system."); // Show error toast notification
//         }
//     };

//     return (
//         <div>
//             <button onClick={handleStart}>Start System</button>
//             <button onClick={handleStop}>Stop System</button>
//             {/* Toast Container to show toast messages */}
//             <ToastContainer />
//         </div>
//     );
// };

// export default ControlPanel;
