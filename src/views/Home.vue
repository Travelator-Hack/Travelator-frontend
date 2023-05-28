<template>
  <span style="background-color: #fff9f9;">
  <Navbar />  

  <div class="container">
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" style="background-color: #78290f; border-color: #78290f; color:#fff9f9" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Фильтры</button>
  </div>

  


  <div class="offcanvas offcanvas-start" data-bs-scroll="true" style="background-color: #fff9f9; color: #041039" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Фильтры</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="container">
      <div class="form-group">
        <label style="font-size: 120%;">Город</label>
        <p v-if="!cities">Loading</p>
          <model-select v-else :options="cities" v-model="item" placeholder="select item" />
       
          <label style="margin-top: 5%; font-size: 120%;">
          Тип транспорта
        </label>
        <span v-for="transport in checkTransport" :key="transport.name">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="transport.checked">
          <label class="form-check-label" for="flexCheckDefault">
            {{transport.name}}
          </label>
        </div>
        </span>

        <label style="margin-top: 5%; font-size: 120%;">Добавить в тур</label>
        <span v-for="inTour in checkTour" :key="inTour.name">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="inTour.checked">
          <label class="form-check-label" for="flexCheckDefault">
            {{inTour.name}}
          </label>
        </div>
        </span>

      </div>
    </div>
  </div>
</div>
</span>
</template>

<script>
import Navbar from '../components/Navbar.vue';

import axios from 'axios';
import { ModelSelect } from "vue-search-select";


export default {
    data() {
        return {
            cities: null,
            item:null,
            checkTransport: [
              { 
                name: "Самолет",
                checked: true,
              },
              {
                name: "Поезд",
                checked: true,
              }
            ],

            checkTour: [
              { 
                name: "Музеи",
                checked: true,
              },
              {
                name: "Экскурсии",
                checked: true,
              },
              {
                name: "Кафе и рестораны",
                checked: true,
              },
              {
                name: "Мероприятия",
                checked: true,
              }
            ],
        };
    },
    methods: {
    async loadCities() {
      const data = await axios.get("http://87.242.120.216:8000/cities/");
      return data.data;
    },
  },
  async mounted() {
    if (!this.cities) {
      this.cities = (await this.loadCities()).map((obj) => ({
        value: obj.id,
        text: obj.title,
      }));
    }
  },
  components: { Navbar, ModelSelect },

};

</script>e

