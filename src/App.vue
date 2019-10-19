<template>
  <v-app>
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

    <v-content>
      <HelloWorld/>
      <Form></Form>
    </v-content>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import AppFooter from './components/footer';
import Form from './components/form';

export default {
  name: 'App',
  components: {
    HelloWorld,
    AppFooter,
    Form,
  },
  data: () => ({
    //
  }),
};
</script>
