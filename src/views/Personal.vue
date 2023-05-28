<template>
  <div id="main" style="background-color: #fff9f9 !important; color: #041039">
    <Navbar />
    <div v-if="!user" class="d-flex justify-content-center spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else class="container">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-4">
              <Avatar :size="180" variant="marble" name="username" />
            </div>
            <div class="col p-2">
              <div class="text-uppercase fw-bold">Добро пожаловать, {{ user.username }}!</div>
              <div class="mt-2">
                <span class="fw-light">Статуc     </span>
                <span class="badge bg-danger">Сменить</span>
                <div class="card border-danger pb-2 mt-2 container row">
                  <div class="card-body col">
                    Пройдите опрос, чтобы получать более персонализированные рекомендации туров!
                  </div>
                  <a href="#" class="col btn btn-danger">Пройти опрос</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card border mt-3">
        <div class="card-body col h3">
          <i class="bi bi-airplane">Создать маршрут</i>
        </div>
      </div>
      <div class="card border mt-3">
        <div class="card-body col h3">
          <i class="bi bi-heart-fill">Избранное</i>
        </div>
      </div>
      <div class="card border mt-3">
        <div class="card-body col h3">
          <i class="bi bi-trophy">Достижения</i>
        </div>
      </div>
      <div class="card border mt-3">
        <div class="card-body col h3">
          <i class="bi bi-tools">Настройки профиля</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "vue-boring-avatars";
import Form from "../components/Form.vue";
import Navbar from "../components/Navbar.vue";
import LogoFormIcon from "../components/icons/LogoFormIcon.vue";
import LogoIcon from "../components/icons/LogoIcon.vue";

import axios from "axios";

export default {
  components: { LogoFormIcon, Navbar, Form, Avatar, LogoIcon },
  data() {
    return { user: null };
  },
  methods: {
    async getUserData() {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("unauthorized");
        this.$router.replace({ path: "/login" });
      }
      const data = await axios.get("http://87.242.120.216:8000/users/me", {
        headers: {
          Accept: "application/json, text/plain, */*",
          token: token,
        },
      });
      return data.data;
    },
  },
  async mounted() {
    this.user = await this.getUserData();
  },
};
</script>

<style>
#main {
  background-color: #fff9f9 !important;
}
</style>
