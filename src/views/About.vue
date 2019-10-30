<!--
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-btn @click="getData">Show Starships</v-btn>
    <v-row>
      <v-col cols="3" v-for="ship in starships" :key="ship.model">
        <v-card v-if="showing">
          <v-card-title>
            <div>
              <h3>{{ ship.name }}</h3>
              <div> {{ ship.model }} </div>
              <p>{{ ship.manufacturer }}</p>
            </div>
          </v-card-title>
          <v-card-action>
            <v-btn @click="showing = false"></v-btn>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
import { aboutMixin } from './aboutMixin'

export default {
  data () {
    return {
      showing: false,
      fetchedData: [],
    }
  },
  methods: {
    getData() {
      let vm = this
      return axios.get('https://swapi.co/api/starships/').then
      (response => {
        console.log(response);
        vm.starships = response.data.results;
      }).catch(error => console.log(error))
    },
},
}
</script>

<style scoped>

</style>
-->


<template>
  <v-app>
    
    <v-app-bar app>
      <!-- need to add directive code
      <v-toolbar-title class="headline text-uppercase">
        <span v-local-highlight:background.delayed="'grey'">STAR</span>
        <span class="font-weight-light">WARS</span>
      </v-toolbar-title>
      -->
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Julianne Halversen</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <button @click="show = !show">Show Alert</button>
      <transition name="fade">
        <div v-if="show">this is some info</div>
      </transition>

      <transition name="slide" type="animation" appear>
        <div v-if="show">this is some info</div>
      </transition>
<br>
<br>
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
-->
      
      <StarshipGrid :starships="starships"></StarshipGrid>
     
      <v-btn @click="getData" class="dataBtn">Get Data</v-btn>
    </v-content>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import axios from 'axios';
import AppFooter from '../components/footer';
//import PersonGrid from './components/PersonGrid';
import starshipGrid from '../components/StarshipGrid';


export default {
  name: 'App',
  components: {
    AppFooter,
    starshipGrid,
  },
  data: () => ({
    //planets: [],
    starships: [],
    fetchedData: [],
    show: false,
    load: true,
    elementWidth: 100,
  }),
  methods: {
    getData() {
      let vm = this
      return axios.get('https://swapi.co/api/starships/').then
      (response => {
        console.log(response);
        vm.starships = response.data.results;
      }).catch(error => console.log(error))
    },
},
 
};
</script>


