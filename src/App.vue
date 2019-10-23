<template>
  <v-app>
    <!--
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
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
-->
    <v-content>
      <Form></Form>
    </v-content>
    <AppFooter></AppFooter>
    <person-grid></person-grid>
  </v-app>
</template>

<script>
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
  data: () => ({
    //
  }),
};
</script>
