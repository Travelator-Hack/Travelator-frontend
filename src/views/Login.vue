<template>
    <div style="background-color: #fff9f9 !important; color: #041039;">
    <Navbar />
      <div class="container-fluid">
        <br />
        <div class="row d-flex justify-content-center">
          <div class="col-xs-2 col-md-6 col-sm-6 col-lg-4 align-self-center">
            <div class="text-center d-flex justify-content-center border p-3" style="border-top-color: #78290F !important; border-left-color: #78290F !important; border-right-color: #78290F !important; border-bottom-color: #FFB570 !important;">
                 <div class="d-inline"><logo-form-icon /></div>
                 <div class="d-inline" style="font-size: 250%;">TRAVELATOR</div>
            </div>
            <div class="p-3 border text-center" style="border-color: #78290F !important; border-bottom: hidden !important; border-top: hidden !important;">
              <p class="fs-2">Вход</p>
            </div>
            <div class="p-3 border" style="border-color: #78290F !important; border-top: hidden !important;">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Form from "../components/Form.vue";
import Navbar from "../components/Navbar.vue";
import LogoFormIcon from "../components/icons/LogoFormIcon.vue";

export default {
    components: { LogoFormIcon, Navbar, Form },
};
</script>

<style scoped>
html {
  background-color: #fff9f9 !important;
}

#form-borders {
    border-color: #78290f !important;
}
</style>