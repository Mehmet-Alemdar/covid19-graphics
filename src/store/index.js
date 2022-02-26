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
      //https://api.covid19api.com/countries
      const request = await axios.get('https://corona.lmao.ninja/v2/countries?yesterday&sort')
      let countries = []
      request.data.forEach(element => {
        countries.push(element.country)
      })
      
      return countries
    },
    async fetchSummary () {
      const request = await axios.get('https://corona.lmao.ninja/v2/countries?yesterday&sort')
      return request.data
    },
      return request.data
    }
  },
  modules: {
  }
})
