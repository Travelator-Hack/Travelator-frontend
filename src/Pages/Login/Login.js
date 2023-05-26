import React from "react";
import Header2 from "../../components/Header2";
import {ReactComponent as Logo} from '../../images/Logo.svg';

function Login() {
  return (
    <div>
      <Header2 />
      <div className="regpage">
        <div className="regcontainer">
          <div className="regel1">
              <Logo className="regLogo" width="50px" height="40px"/>
              <span><h2>TRAVELATOR</h2></span>
          </div>
          <span className="regtext1"><h2>Вход</h2></span>
          <div className="regform">
            <form>
              <span><h2>Имя пользователя</h2></span>
              <input type="text"/>
              <span><h2>Пароль</h2></span>
              <input type="password"/>
              <input type="submit" value="Войти"/>
            </form>
            <span className="regtext2"><h2>Ещё нет аккаунта?</h2></span>
            <a href="/reg"><button href="/login" className="regbut">Зарегистрироваться</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;