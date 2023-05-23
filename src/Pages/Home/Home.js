import React from 'react';
import {ReactComponent as Logo} from '../../images/Logo.svg';
import '../../styles/App.css';

function Home() {
  return (
    <div className="Homepage">
      <h2>Добро пожаловать на наш сайт!</h2>
      <p>Travelator</p>
      <Logo className="logo"/>
      <p>Здесь вы можете найти лучшие предложения для вашего отдыха.</p>
      <p>Просто заполните анкету и мы подберем для вас персонализированный туристический пакет.</p>
      <button>Начать</button>
      
    </div>
  );
}

export default Home;