import React from 'react';
import SvgHomeSelector from './SvgHomeSelector';
import '../../styles/App.css';

function Home() {
  return (
    <div className="Home">
      <h2>Добро пожаловать на наш сайт!</h2>
      <p>Travelator</p>
      <div className="svglogo">
        <SvgHomeSelector />
      </div>
      <p>Здесь вы можете найти лучшие предложения для вашего отдыха.</p>
      <p>Просто заполните анкету и мы подберем для вас персонализированный туристический пакет.</p>
      <button>Начать</button>
    </div>
  );
}

export default Home;