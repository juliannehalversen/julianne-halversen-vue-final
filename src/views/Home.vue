<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-content>
      <router-view></router-view>
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
