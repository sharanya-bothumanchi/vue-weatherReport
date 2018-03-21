import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  cities: [{
    header: 'List of Cities',
  }],
};
const getters = {
  cities: () => state.cities,
};

const actions = {
  ADD_CITY: (context, payload) => {
    context.commit('addCity', payload);
  },
};

const mutations = {
  addCity: (state, payload) => {
    payload.avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkcBxbbXmvedxZNwQcXRMyJqarZww0moK35f581zsx50D0TekFIw';
    state.cities.push(payload);
    state.cities.push({ divider: true, inset: true });
  },
};
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
