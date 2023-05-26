import React from 'react';
import {ReactComponent as Logo} from '../../images/Logo.svg';
import '../../styles/App.css';
import Header from '../../components/Header';

function Home() {
  return (
    <div className="Homepage">
      <Header />
      <div className="homel1">
        <Logo className="logo" width="140px" height="140px"/>
        <div className="homel2">
          <span className="homelogotext1"><h1>Travelator</h1></span>
          <span className="homelogotext2"><h2>Твой идеальный отпуск - наша забота!</h2></span>
        </div>
      </div>
      <div className="homel3"><h2><p>Воспользуйтесь уникальной возможностью создать идеальное путешествие, отвечающее всем вашим предпочтениям и желаниям.</p>
        <p>Вне зависимости от того, хотите ли вы насладиться спокойным отдыхом на пляже, исследовать удивительные природные достопримечательности, окунуться в культуру и историю или попробовать местную кухню, наше приложение найдет для вас оптимальный маршрут.</p>
        <p>Мы используем передовые технологии и интеллектуальный анализ данных, чтобы на основе ваших ответов на небольшой опрос создать индивидуальный туристический пакет, сочетающий в себе интересные места, активности и услуги.</p></h2>
      </div>
      <span className="homelogotext3"><p>Начни свое лучшее путешествие прямо сейчас</p></span>
			<div>
        <ul className="homelist">
          <li>Зарегистрируйся</li>
          <li>Пройди опрос</li>
          <li>Выбери путешествие</li>
          <li>Насладись поездкой</li>
        </ul>
      </div>
      <div>
        <button href="/" className="homebut">Собрать маршрут</button>
      </div>
    </div>
  );
}

export default Home;