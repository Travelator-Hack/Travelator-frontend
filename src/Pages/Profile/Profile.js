import React from "react";
import "../../styles/App.css";
import Header3 from "../../components/Header3";
import { ReactComponent as Textm } from "../../images/Textm.svg";
import { ReactComponent as Heart } from "../../images/Heart.svg";
import { ReactComponent as Image } from "../../images/Image.svg";
import { ReactComponent as Steel } from "../../images/Steel.svg";

function Profile() {
  return (
    <div>
      <Header3 />
      <div className="profilepage">
        <div className="profilecon1">
          <div className="profilecon2">
            <div className="profel1"></div>
            <div className="profilecon3">
              <div className="profel2">
                <span>
                  <h2>Имя</h2>
                </span>
                <span>
                  <h2>Фамилия</h2>
                </span>
              </div>
              <div className="profel3">
                <span>
                  <h2 width="640px">Статус</h2>
                </span>
                <a href="/">
                  <button href="/login" className="profbut1">
                    Сменить статус
                  </button>
                </a>
              </div>
              <div className="profel4">
                <span className="profel5">
                  <h2>
                    Пройдите опрос, чтобы получать более персонализированные
                    рекомендации туров!
                  </h2>
                </span>
                <button className="profbut2">Пройти опрос</button>
              </div>
            </div>
          </div>
          <a className="profilecon4" href="/">
            <Textm width="60px" height="60px" />
            <span>
              <h2>Создать маршрут</h2>
            </span>
          </a>
          <a className="profilecon5" href="/">
            <Heart width="60px" height="60px" />
            <span>
              <h2>Избранное</h2>
            </span>
          </a>
          <a className="profilecon6" href="/">
            <Image width="60px" height="60px" />
            <span>
              <h2>Достижения</h2>
            </span>
          </a>
          <a className="profilecon7" href="/">
            <Steel width="60px" height="60px" />
            <span>
              <h2>Настройки профиля</h2>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
