import React from 'react';

function Profile() {
  return (
    <div className="Profile">
      <h2>Личный кабинет</h2>
      <p>Здесь вы можете просмотреть и изменить свои данные, а также посмотреть историю ваших заказов.</p>
      <form>
        <label htmlFor="name">Имя:</label>
        <input type="text" id="name" name="name" value="Иван" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value="ivan@mail.ru" />
        <label htmlFor="password">Пароль:</label>
        <input type="password" id="password" name="password" value="123456" />
        <button>Сохранить изменения</button>
      </form>

      <h3>История заказов</h3>
      <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Страна</th>
            <th>Цена</th>
            <th>Статус</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>01.05.2023</td>
            <td>Италия</td>
            <td>50 000 руб.</td>
            <td>Оплачено</td>
          </tr>

          <tr>
            <td>15.06.2023</td>
            <td>Франция</td>
            <td>60 000 руб.</td>
            <td>В ожидании</td>
          </tr>

          <tr>
            <td>30.07.2023</td>
            <td>Турция</td>
            <td>40 000 руб.</td>
            <td>Отменено</td>
          </tr>

        </tbody>

      </table>

    </div>

  );
}

export default Profile;
