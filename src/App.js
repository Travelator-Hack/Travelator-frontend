import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import './styles/App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/profile" element={<ProfilePage />} />  */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/reg" element={<RegPage />} /> */}
          {/* <Route path="/changepass" element={<ChangePass />} /> */}
          {/* <Route path="/*" element={<Page404 />} /> */}
        </Routes>
      </Router>
  );
}

export default App;
