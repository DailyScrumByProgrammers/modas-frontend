//App.js

import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./pages/dashBoard/dashBoardPage";
import Search from "./pages/search/searchPage";
import MainPage from "./pages/main/mainPage";

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
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* 메인 페이지 */}
        <Route path="/dash-board" element={<Dashboard />} />{" "}
        {/* 대시보드 페이지 */}
        <Route path="/search" element={<Search />} /> {/* 검색 페이지 */}
      </Routes>
    </Router>
  );
}

export default App;
