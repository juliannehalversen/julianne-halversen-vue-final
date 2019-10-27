<template>
  <v-app>
    
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span v-local-highlight:background.delayed="'grey'">STAR</span>
        <span class="font-weight-light">WARS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Form></Form>
      <PersonGrid :people="people"></PersonGrid>
      <v-btn @click="getData" class="dataBtn">Get Data</v-btn>
    </v-content>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import axios from 'axios';
import AppFooter from './components/footer';
import Form from './components/form';
import PersonGrid from './components/PersonGrid';


export default {
  name: 'App',
  components: {
    AppFooter,
    Form,
    PersonGrid,
  },
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers['delayed']) {
          delay = 3000;
        }
        setTimeout(() => {
          if(binding.arg == 'background') {
            el.style.color = '#55C7FB';
          } else {
            el.style.color = binding.value;
          }
        }, delay);
      }
    }
  },
  data: () => ({
    people: [],
    //planets: [],
    fetchedData: []
  }),
  methods: {
    getData() {
      let vm = this
      return axios.get('https://swapi.co/api/people/').then
      (response => {
        console.log(response);
        vm.people = response.data.results;
      }).catch(error => console.log(error))
    }
  },
};
</script>

<style scoped>
.dataBtn {
  color: red;
  width: 300px;

}
</style>
