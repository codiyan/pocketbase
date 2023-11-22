import React from 'react';
import axios from 'axios';

const YourComponent: React.FC = () => {
  // Function to call the custom API
  const processOrder = async (userId: string) => {
    try {
      // Make a POST request to the custom API endpoint in PocketBase
      const response = await axios.post('http://127.0.0.1:8090/api/process-order', {
        userId, // Send the user ID to the backend
      });
      console.log(response.data); // Log the response from the backend
      // Perform further actions based on the response
    } catch (error) {
      // Handle errors if the API call fails
      console.error('Error:', error);
    }
  };

  const handleButtonClick = () => {
    // Replace 'yourUserId' with an actual user ID or get it from user input
    const userId = 'kggqnu1xbrhrswr';
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
