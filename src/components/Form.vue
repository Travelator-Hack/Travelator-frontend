<template>
    <span style="background-color: #fff9f9; color">   
      <div class="mb-3 text-center">
        <label for="login" class="form-label fs-5">
          Имя пользователя
        </label>
        <input
          :class="{ 'form-control': true, 'is-invalid': retryEnter }"
          id="login"
          v-model="loginInput"
        />
      </div>
      <div class="mb-3 text-center">
        <label for="pass" class="form-label fs-5">Пароль</label>
        <input
          type="password"
          :class="{ 'form-control': true, 'is-invalid': retryEnter }"
          id="pass"
          v-model="passwordInput"
        />
        <a href="#" class="text-decoration-none fs-6" style="color: #78290F">
          <span v-if="isReg">
          </span>
          <span v-else>
            Забыли пароль?
          </span>
        </a>
        <div
          v-if="retryEnter"
          id="validationServerUsernameFeedback"
          :class="{ 'invalid-feedback': retryEnter }"
          class="text-center"
        >
          Неправильный логин или пароль. Попробуйте снова
        </div>
      </div>
      <div class="d-grid d-flex gap-2 mb-3 justify-content-center">
        <span v-if="isReg">
          <button class="btn btn-primary" style="background-color: #78290F; color: #fff9f9; border-color: #78290F" @click="register">Зарегистрироваться</button>
          </span>
          <span v-else>
            <button class="btn btn-primary" style="background-color: #78290F; color: #fff9f9; border-color: #78290F" @click="authorize">Войти</button>
          </span>
      </div>
      <hr style="background-color: #FFB570; opacity: 100%;">
      <p class="text-center" style="opacity: 75%; color: #041039">
        <span v-if="isReg">
          Уже есть аккаунт?
          </span>
          <span v-else>
            Еще нет аккаунта?
          </span>
      </p>
      <div class="d-grid gap-2 d-flex justify-content-center">
        <span v-if="isReg">
          <button class="btn btn-secondary" style="border-color: #78290f; color: #78290f; background-color: #fff9f9; width: 100%;" @click="goLogin" >
            Войти
          </button>
          </span>
          <span v-else>
            <button class="btn btn-secondary" style="border-color: #78290f; color: #78290f; background-color: #fff9f9;" @click="goRegister">
              Зарегистрироваться
            </button>
          </span>
      </div>
    </span>
  </template>
  
  <script>
  
  import axios from "axios";
  import LogoFormIcon from "./icons/LogoFormIcon.vue";
  
  export default {
  components: { LogoFormIcon },
    mounted() {
      if (localStorage.getItem("token")) {
        this.$router.replace({ path: "/" });
      }
    },
    data() {
      return {
        passwordInput: "",
        loginInput: "",
        retryEnter: false,
      };
    },
    props:{
      isReg: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      goLogin() {
        this.$router.replace({ path: "/login" });
      },
      goRegister() {
        this.$router.replace({ path: "/reg" });
      },
      goHome() {
        this.$router.replace({ path: "/" });
      },
      authorize() {
        axios
          .post(
            "http://87.242.120.216:8000/users/token",
            {
              username: this.loginInput,
              password: this.passwordInput,
            },
            {
              headers: {
                Accept: "application/json, text/plain, */*",
                "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                Authorization: "Basic Og==",
                Connection: "keep-alive",
                Origin: "http://87.242.120.216:8000",
                Referer: "http://87.242.120.216/docs",
                "User-Agent":
                  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
                "X-Requested-With": "XMLHttpRequest",
              },
            }
          )
          .then((response) => {
            console.log(response);
            localStorage.setItem('token', response.data);
            this.goHome();
          })
          .catch((e) => {
            this.retryEnter = true;
          });
  
  
      },
      
      register() {
        axios
          .post(
            "http://87.242.120.216:8000/users/signup",
            {
              username: this.loginInput,
              password: this.passwordInput,
            },
            {
              headers: {
                Accept: "application/json, text/plain, */*",
                "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                Authorization: "Basic Og==",
                Connection: "keep-alive",
                Origin: "http://87.242.120.216:8000",
                Referer: "http://87.242.120.216/docs",
                "User-Agent":
                  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
                "X-Requested-With": "XMLHttpRequest",
              },
            }
          )
          .then((response) => {
            console.log(response);
            this.goLogin();
          })
          .catch((e) => {
            this.retryEnter = true;
          });
  
  
      },
    },
  };
  </script>
  
  <style>
  #background {
    background-color: #fff9f9;
    color: #041039
  }
  </style>