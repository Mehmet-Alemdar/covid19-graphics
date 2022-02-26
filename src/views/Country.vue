<script>
import { mapActions } from 'vuex';
export default {
  name: 'Country',
  data () {
    return {
      country: {}
    }
  },
  components: {
  },
  async mounted () {
    const countries = await this.fetchSummary()
    this.country = countries.find(e => e.country == this.$route.query.q)
  },
  methods: {
    ...mapActions(['fetchSummary'])
  }
}
</script>

<template>
  <div class="country">
    <div class="summary-container">
      <h2>{{country.country}}</h2>
      <img :src="country.countryInfo.flag" alt="">
      <p>Population: {{country.population}}</p>
      <p>Active: {{country.active}}</p>
      <p>Critical: {{country.critical}}</p>
    </div>
    <div class="comparison-container">
      <div class="comparison"><p class="value">Today Deaths <p>{{country.todayDeaths}}</p></p></div>
      <div class="comparison"><p class="value">Deaths <p >{{country.deaths}}</p> </p></div>
      <div class="comparison"><p class="value">Today Cases <p >{{country.todayCases}}</p> </p></div>
      <div class="comparison"><p class="value">Cases <p >{{country.cases}}</p> </p></div>
      <div class="comparison"><p class="value">Today Recovered <p >{{country.todayRecovered}}</p> </p></div>
      <div class="comparison"><p class="value">Recovered <p >{{country.recovered}}</p> </p></div>      
    </div>
  </div>
</template>

<style lang="scss">
  h2,p  {
    font-family: 'Times New Roman', Times, serif;
  }
  html {
    font-weight: 200;
  }
  .summary-container {
    margin: 5rem auto;
    max-width: 50rem;
    box-shadow: 0 0 10px rgb(187, 187, 187);
    text-align: center;
    padding: 1rem 0;
    border-radius: 7px;
    background-color: white;
  }
  .comparison-container {
     margin: 5rem auto;
    max-width: 50rem;
    box-shadow: 0 0 15px 1px rgba(159, 95, 223, 0.9);
    text-align: center;
    border-radius:7px;
    display: flex;
    flex-flow: column;
  }
  .comparison {
    flex: 1;
    padding: 1rem;
    color: white;
  }
  .comparison:first-child {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  .comparison:last-child {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }
  .comparison:nth-child(odd){
    background-color: rgb(159, 95, 223);
  }
  .comparison:nth-child(even){
    background-color: rebeccapurple;
  }
  p {
    font-size: 20px;
  }
  .value {
    font-size: 22px;
    font-weight: bold;
    color: #ffd000;
  }
</style>