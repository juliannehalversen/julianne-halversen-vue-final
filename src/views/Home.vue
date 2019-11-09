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
-->   
      <PersonGrid :people="people"></PersonGrid>

      <v-btn @click="getData" class="dataBtn" id="getDataBtn">Get Data</v-btn>
    </v-content>
    
    <AppFooter></AppFooter>

  </v-app>
</template>

<script>
import axios from 'axios';
import AppHeader from '../components/header';
import AppFooter from '../components/footer';
import PersonGrid from '../components/PersonGrid';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    PersonGrid,
  },
  data: () => ({
    people: [],
    //planets: [],
    fetchedData: [],
    show: false,
    load: true,
    elementWidth: 100,
    show: false,
  }),
  
  methods: {
    getData() {
      let vm = this
      return axios.get('https://swapi.co/api/people/').then
      (response => {
        console.log(response);
        vm.people = response.data.results;
      }).catch(error => console.log(error))
    },
    /*
  beforeEnter(el) {
    console.log('beforeEnter');
    this.elementWidth = 100;
    el.style.width = this.elementWidth + 'px';
  },
  enter(el, done) {
    console.log('enter');
    let round = 1;
    const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + 'px';
        round++;
        if (round> 20) {
          clearInterval(interval);
          done();
        }
    }, 20);
  },
  afterEnter(el) {
    console.log('afterEnter');
  },
  enterCancelled(el) {
    console.log('enterCancelled');
  },
  beforeLeave(el) {
    console.log('beforeLeave');
    this.elementWidth = '300px';
    el.style.width = this.elementWidth + 'px';
  },
  leave(el, done) {
    console.log('leave');
    let round = 1;
    const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + 'px';
        round++;
        if (round> 20) {
          clearInterval(interval);
          done();
        }
    }, 20);
  },
  afterLeave(el) {
    console.log('afterLeave');
  },
  leaveCancelled(el) {
    console.log('leaveCancelled');
  },*/ 
},
 
};
</script>

<style scoped>
.dataBtn {
  color: red;
  width: 300px;
}
#getDataBtn {
  margin-left: 10%;
}
/*
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 2s;
}
.fade-leave-active {
   transition: opacity 2s;
   opacity: 0;
}

.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity .5s ;
}
.slide-leave {
  
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}

@keyframes slide-in {
  from {
      transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
*/
</style>
