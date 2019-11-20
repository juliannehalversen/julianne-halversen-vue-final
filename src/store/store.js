import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    favorites: [],
  },
  /*
  getters: {
    personInfo (state) {
      return state.favoritePersonInfo;
    }
  },
  */
});