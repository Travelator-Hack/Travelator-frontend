import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import Profile from './Pages/Profile/Profile.js';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Рекомендательный сервис формирования персонализированных туристических пакетов</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/profile">Личный кабинет</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
