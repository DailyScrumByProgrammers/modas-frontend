
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main/mainPage';
import TeamSpace from './pages/teamspace/main';
import Nav from './component/header';

function App() {
  // const sendRequest = async () => {
  //   const response = await axios.get('http://localhost:8000');
  //   console.log(response);
  //   console.log(response.data);
  // };

  // useEffect(() => {
  //   sendRequest();
  // }, []); // 빈 배열을 넣어 한 번만 호출되게 설정

  return (
      <Router>
        <Nav /> {/* Nav 컴포넌트 포함 */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/teamspace" element={<TeamSpace />} /> {/* teamspace 라우트 추가 */}
        </Routes>
      </Router>
  );
}

export default App;
