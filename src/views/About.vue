<template>
  <div style="background-color: #fff9f9">
    <Navbar />
    <div class="container d-flex justify-content-center mb-5">
      <div class="d-inline mx-5">
        <LogoDarkIcon />
      </div>
      <div
        class="d-inline d-flex flex-column align-items-top"
        style="height: 150px"
      >
        <div
          class="text-center"
          style="
            font-size: 550%;
            color: #041039;
            margin-bottom: -2.5%;
            margin-top: -2.5%;
          "
        >
          TRAVELATOR
        </div>
        <div style="font-size: 200%; color: #041039">
          Твой идеальный отдых - наша работа!
        </div>
      </div>
    </div>
    <div
      class="container text-center"
      style="width: 50%; color: #041039; font-size: 120%"
    >
      <p style="text-align: justify; text-indent: 5%; margin-bottom: -0.25%">
        Воспользуйтесь уникальной возможностью создать идеальное путешествие,
        отвечающее всем вашим предпочтениям и желаниям.
      </p>
      <p style="text-align: justify; text-indent: 5%; margin-bottom: -0.25%">
        Вне зависимости от того, хотите ли вы насладиться спокойным отдыхом на
        пляже, исследовать удивительные природные достопримечательности,
        окунуться в культуру и историю или попробовать местную кухню, наше
        приложение найдет для вас оптимальный маршрут.
      </p>
      <p style="text-align: justify; text-indent: 5%">
        Мы используем передовые технологии и интеллектуальный анализ данных,
        чтобы на основе ваших ответов на небольшой опрос создать индивидуальный
        туристический пакет, сочетающий в себе интересные места, активности и
        услуги.
      </p>

      <p style="font-size: 150%; margin-top: 2.5%">
        Начни свое лучшее путешествие прямо сейчас!
      </p>

      <div class="container text-start d-flex align-center" style="width: 40%">
        <ul
          style="
            list-style-image: url('../../public/text-mark.png');
            list-style-position: inside;
          "
        >
          <li>Зарегистрируйся</li>
          <li>Пройди опрос</li>
          <li>Выбери путешествие</li>
          <li>Насладись поездкой</li>
        </ul>
      </div>
    </div>
    <div class="conteiner d-flex justify-content-center">
      <button type="button" class="btn-lg mx-auto" style="background-color: #78290F; color: #fff9f9; width: 25%; font-size: 150%;"> Собрать маршрут</button>
    </div>
  </div>
</template>

<script setup>
import LogoDarkIcon from "../components/icons/LogoDarkIcon.vue";
import Navbar from "../components/Navbar.vue";
</script>

<style>
html {
  background-color: #fff9f9;
}
</style>
