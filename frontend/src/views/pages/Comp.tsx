import React from "react";
import axios from "axios";
import { pb } from "../../services/pocketbase";

const YourComponent: React.FC = () => {
  // Function to call the custom API
  const processOrder = async (userId: string) => {
    try {
      // Make a POST request to the custom API endpoint in PocketBase
      const response = await pb.send(`/process-order/${userId}`, {
        method: "POST",
      });

      console.log(response.data); // Log the response from the backend
      // Perform further actions based on the response
    } catch (error) {
      // Handle errors if the API call fails
      console.error("Error:", error);
    }
  };

  const handleButtonClick = () => {
    // Replace 'yourUserId' with an actual user ID or get it from user input
    const userId = "kggqnu1xbrhrswr";
    processOrder(userId);
  };

  return (
    <div>
      <h1>Your React Page</h1>
      <button onClick={handleButtonClick}>Process Order</button>
    </div>
  );
};

export default YourComponent;
