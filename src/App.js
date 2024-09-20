//App.js

import axios from "axios";
import React, { useState, useEffect } from "react";
import Dashboard from "./pages/dashBoard";

function App() {
  const sendRequest = async () => {
    const response = await axios.get("http://localhost:8000");
    console.log(response);
    console.log(response.data);
  };

  useEffect(() => {
    sendRequest();
  });

  return (
    <div className="App">
      <Dashboard />;
    </div>
  );
}

export default App;
