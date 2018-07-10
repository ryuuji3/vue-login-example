import Vue from 'vue';
import Vuex from 'vuex';
import Moment from 'moment';

import { login } from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: {
      metadata: {
        isFetching: false,
        lastUpdated: undefined,
      },
      payload: undefined,
    },
  },
  getters: {
    loggedIn: state =>
      state.token.payload && state.token.payload.token !== undefined,
    loginError: state => state.token.payload && state.token.payload.error !== undefined,
  },
  mutations: {
    fetchingToken: state => {
      state.token.metadata.isFetching = true;
    },
    updateToken: (state, payload) => {
      state.token = {
        payload,
        metadata: {
          isFetching: false,
          lastUpdated: Moment().unix(),
        },
      };
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
      commit('fetchingToken');
      commit('updateToken', await login(username, password));
    },
  },
});
