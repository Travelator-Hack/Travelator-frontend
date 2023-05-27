import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "../../components/Header2";
import '../../styles/App.css';
import {ReactComponent as Logo} from '../../images/Logo.svg';
import { doSubmitForm } from "../../components/reg.js";
import { toast } from "react-toastify";

export function Registraion() {
  const [name, setName] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkPwd, setCheckPwd] = useState("");

  const [checkPwdError, setCheckPwdError] = useState("");

  const navigate = useNavigate();

  const GoLogin = () => {
    return navigate("/login");
  };

  const CheckName = (name) => {
    setName(name.target.value);
  };

  const CheckFullname = (fullname) => {
    setFullname(fullname.target.value);
  };

  const CheckUsername = (username) => {
    setUsername(username.target.value);
  };

  const CheckPassword = (password) => {
    setPassword(password.target.value);
  };

  const CheckPwd = (checkPwd) => {
    setCheckPwd(checkPwd.target.value);
  };

  const clearFields = () => {
    setFullname("");
    setUsername("");
    setPassword("");
    setCheckPwd("");
  };

  const doSubmit = event => {
    console.log(
      "Кнопка тыкнулась",
      "Name: " + name,
      "Full Name: " + fullname,
      "Username: " + username,
      "Password: " + password
    );
  
    if (password !== checkPwd) {
      setCheckPwdError("Пароли не совпадают!");
    } else setCheckPwdError("");

    if (name && fullname && username && password && !checkPwdError) {
      doSubmitForm(name, fullname, username, password)
        .then(() => {
          toast.success("Пользователь успешно создан!");
          clearFields();
          return navigate("/login");
        })
        .catch((error) => {
          toast.error(String(error.response.data.detail));
        });
    } else {
      if (checkPwdError) {
        toast.error(checkPwdError);
      } else toast.error("Все поля должны быть заполнены!");
    }
    event.preventDefault();
  };

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
              <span><h2>Ваше имя</h2></span>
              <input 
              type="text"
              className="form-control"
              id="Name"
              placeholder="Name"
              value={name}
              onChange={CheckName}/>
              <span><h2>Ваша фамилия</h2></span>
              <input type="text"
                  className="form-control"
                  id="FullName"
                  placeholder="Fullname"
                  value={fullname}
                  onChange={CheckFullname}/>
              <span><h2>Логин</h2></span>
              <input type="text"
                  className="form-control"
                  id="Username"
                  placeholder="Username"
                  value={username}
                  onChange={CheckUsername}/>
              <span><h2>Пароль</h2></span>
              <input type="Password"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  value={password}
                  onChange={CheckPassword}/>
              <button type="button" onClick={doSubmit}>Зарегистрироваться</button>
            </form>
            <span  className="regtext2"><h2>Уже есть аккаунт?</h2></span>
            <a href="/login"><button className="regbut">Войти</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registraion;