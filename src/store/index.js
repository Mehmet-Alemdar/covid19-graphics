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
    currentDate() {
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; 
      let dd = today.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;

      const currentDate = dd + '/' + mm + '/' + yyyy;

      return currentDate
    },
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
