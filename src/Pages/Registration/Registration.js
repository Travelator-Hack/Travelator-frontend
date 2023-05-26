import React from "react";
import Header2 from "../../components/Header2";
import '../../styles/App.css';
import {ReactComponent as Logo} from '../../images/Logo.svg';

function Registration() {
  return (
    <div>
      <Header2 />
      <div className="regpage">
        <div className="regcontainer">
          <div className="regel1">
              <Logo className="regLogo" width="50px" height="40px"/>
              <span><h2>TRAVELATOR</h2></span>
          </div>
          <span className="regtext1"><h2>Регистрация</h2></span>
          <div className="regform">
            <form>
              <span><h2>Имя пользователя</h2></span>
              <input type="text"/>
              <span><h2>Пароль</h2></span>
              <input type="password"/>
              <input type="submit" value="Зарегистрироваться"/>
            </form>
            <span className="regtext2"><h2>Уже есть аккаунт?</h2></span>
            <a href="/login"><button className="regbut">Войти</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;