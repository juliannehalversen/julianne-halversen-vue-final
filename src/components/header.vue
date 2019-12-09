<template>
  <div>
      <v-app-bar app>
          <v-toolbar-title class="headline text-uppercase">
            <span v-local-highlight:background.delayed="'grey'">STAR</span>
            <span class="font-weight-light">WARS</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          
          <v-btn text>
            <router-link to="/" exact>Home</router-link>
          </v-btn>

          <v-btn text>
            <router-link to="form">Form</router-link>
          </v-btn>

          <v-btn text>
            <router-link to="about">About</router-link>
          </v-btn>

          <v-btn
            text
            href="https://github.com/juliannehalversen"
            target="_blank"
          >
          <span class="mr-2">Julianne Halversen</span>
        </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
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
}
</script>

<style>
.router-link-active {
    color: red !important;
}

</style>