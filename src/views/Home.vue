<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-content>
      <router-view></router-view>
      <!--
      <button @click="show = !show">Show Alert</button>
      <transition name="fade">
        <div v-if="show">this is some info</div>
      </transition>

      <transition name="slide" type="animation" appear>
        <div v-if="show">this is some info</div>
      </transition>
      -->
      <!--
      <button @click="load = !load">Load / Remove Element</button>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
        :css="false"
        >
      
        <div style="width: 100px; height: 100px; background-color: lightgreen;" v-if="load"></div>
      </transition>
      
      <v-container>
        <ul >
  <li v-for="value in object">
    {{ object.title }}
  </li>
</ul>
<div v-for="(value, name, index) in object">
  {{ index }}. {{ name }}: {{ value }}
</div>
-->
        <!--<h1>Star Wars People</h1>-->
        <v-container>
          <h1>Star Wars People</h1>
        <PersonGrid :people="people"></PersonGrid>
        <v-row>
            <v-col cols="3">
               <v-btn @click="getData" class="dataBtn" id="getDataBtn">Get Data</v-btn>
            </v-col>
        </v-row>
    </v-container>
      
    </v-content>




    <Favorites></Favorites>
  </v-app>
</template>

<script>
import axios from "axios";
import AppHeader from "../components/header";
import PersonGrid from "../components/PersonGrid";
import Favorites from "../components/favorites";

export default {
  name: "App",
  components: {
    AppHeader,
    PersonGrid,
    Favorites
  },
  data: () => ({
    people: [],
    fetchedData: [],
    show: false,
    load: true,
    elementWidth: 100,
  }),

  methods: {
    getData() {
      let vm = this;
      return axios
        .get("https://swapi.co/api/people/")
        .then(response => {
          console.log(response);
          vm.people = response.data.results;
        })
        .catch(error => console.log(error));
    },
  }
};
</script>

<style scoped>
.dataBtn {
  color: red;
  width: 300px;
  margin-bottom: 30px;
}
#getDataBtn {
  border: 1px solid white;
}
* {
  background-image: url("../assets/stars2.jpg");
}
.theme--dark.v-application {
  background-image: url("../assets/stars2.jpg");
}
.v-content__wrap {
  background-color: yellow;
}
</style>
