import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async fetchCountries () {
      const request = await axios.get('https://api.covid19api.com/countries')
      return request.data
    }
  },
  modules: {
  }
})
