<template>
  <nav class="navbar sticky-top mb-3" style="background-color: #15616d;">
    <div class="container-fluid justify-content-between">
      <a class="navbar-brand" id="clickable" @click="goHome" style="color: #fff9f9; font-size: 30px;">
        <div class="d-inline"><logo-icon /></div>
        TRAVELATOR
      </a>
      <ul class="nav justify-content-end fs-5">
        <li v-if="isToken">
          <a
            id="clickable"
            @click="goDashboard"
            class="nav-link"
            style="color: #fff9f9;"
            aria-current="page"
            >Выйти</a
          >
        </li>
        <span v-if="!isToken">
            <li>
                <a id="clickable" @click="goLogin" class="nav-link" style="color: #fff9f9;">Вход</a>
            </li>
        </span>
        <span v-if="!isToken">
            <li>
                <a id="clickable" @click="goRegistration" class="nav-link" style="color: #fff9f9;">Регистрация</a>
            </li>
        </span>
      </ul>
    </div>
  </nav>
</template>

<script>
import LogoIcon from './icons/LogoIcon.vue';

export default {
  components: { LogoIcon },
    data() {
        return {
            isToken: null,
        }
    },
    mounted() {
        const token = localStorage.getItem("token");
        if (!token) {
            this.isToken = 0;
        }
        else {
            this.isToken = 1;
        }
    },
  methods: {
    goDashboard() {
      this.$router.replace({ path: "/" });
    },
    goRegistration() {
      localStorage.clear();
      this.$router.replace({ path: "/reg" });
    },
    goLogin() {
      localStorage.clear();
      this.$router.replace({ path: "/login" });
    },
  },
};
</script>

<style>
#clickable {
  cursor: pointer;
}
</style>
