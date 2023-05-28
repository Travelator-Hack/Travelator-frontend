<template>
  <div>
    <navbar />
    <div class="container">
      <div class="card">
        <div class="card-header h2">Опрос</div>
        <div class="card-body">
          <div class="container">
            <div class="row">В каком городе вы сейчас находитесь?</div>
            <p v-if="!cities">Загружаем города...</p>
            <model-select
              v-else
              :options="cities"
              v-model="current_city_id"
              placeholder="Начните вводить название города..."
            />
            <div class="row">Какие регионы вы уже посетили?</div>
            <p v-if="!regions">Загружаем регионы...</p>
            <MultiSelect
              v-else
              :options="regions"
              :selected-options="visited_regions"
              placeholder="Начните вводить название региона..."
              @select="onSelectVisited"
            >
            </MultiSelect>
            <div class="row">Какие регионы вы планируете посетить?</div>
            <p v-if="!regions">Загружаем регионы...</p>
            <MultiSelect
              v-else
              :options="regions"
              :selected-options="will_visit_regions"
              placeholder="Начните вводить название региона..."
              @select="onSelectWill"
            >
            </MultiSelect>
            <div class="row">Выберите предпочитаемые виды транспорта</div>
            <MultiSelect
              :options="transport"
              :selected-options="selected_transport"
              placeholder="Начните вводить название региона..."
              @select="onSelectTransport"
            >
            </MultiSelect>
            <div class="row">Примерный бюджет на одну поездку</div>
            <input v-model="budget" type="number" min="1" max="100000000" />
            <div class="row">С какой целью вы путешествуете?</div>
            <model-select :options="purposes" v-model="selected_purpose" placeholder="Введите цель поездки..." />
          </div>
          <div class="text-center pt-4">
            <button type="button" class="btn btn-primary">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import { ModelSelect, MultiSelect } from "vue-search-select";

export default {
  data() {
    return {
      cities: null,
      regions: null,
      current_city_id: null,
      visited_regions: [],
      lastSelectItem: {},
      will_visit_regions: [],
      transport: [
        { text: "Самолет", value: "aero" },
        { text: "Поезд", value: "rails" },
        { text: "Автомобиль", value: "car" },
      ],
      selected_transport: [],
      budget: 1.0,
      purposes: [
        { text: "Гастротур", value: "gastro" },
        { text: "Посещение культурных мероприятий", value: "cultural" },
        { text: "Отдых от городской суеты", value: "recreation" },
      ],
      selected_purpose: null,
    };
  },
  methods: {
    onSelectVisited(items, lastSelectItem) {
      this.visited_regions = items;
      this.lastSelectItem = lastSelectItem;
    },
    onSelectWill(items, lastSelectItem) {
      this.will_visit_regions = items;
      this.lastSelectItem = lastSelectItem;
    },
    onSelectTransport(items, lastSelectItem) {
      this.selected_transport = items;
      this.lastSelectItem = lastSelectItem;
    },
    async loadCities() {
      const data = await axios.get("http://87.242.120.216:8000/cities/");
      return data.data;
    },
    async loadRegions() {
      const data = await axios.get("http://87.242.120.216:8000/regions/");
      return data.data;
    },
    async submitForm() {
      try {
        const res = await axios.post(
          "http://87.242.120.216:8000/rec/survey",
          {
            current_city: this.current_city_id,
            visited_regions: this.visited_regions,
            wanted_regions: this.wanted_regions,
            transport_type: this.selected_transport,
            budget: this.budget,
            target: this.selected_purpose,
          },
          {
            headers: {
              Accept: "application/json, text/plain, */*",
              token: token,
            },
          }
        );
      } catch (e) {
        console.log(e);
      }
    },
  },
  async mounted() {
    if (!this.cities && !this.regions) {
      this.cities = (await this.loadCities()).map((obj) => ({
        value: obj.id,
        text: obj.title,
      }));
      this.regions = (await this.loadRegions()).map((obj) => ({
        value: obj.id,
        text: obj.title,
      }));
    }
  },
  components: { Navbar, ModelSelect, MultiSelect },
};
</script>

<style></style>
