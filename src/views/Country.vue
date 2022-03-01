<script>
import { mapActions } from 'vuex';
import BarChart from '@/components/BarChart'
export default {
  name: 'Country',
  data () {
    return {
      country: {},
      data: {
        label: '',
        labels:[],
        values: []
      },
      date: ''
    }
  },
  components: {
    BarChart
  },
  async mounted () {
    const countries = await this.fetchSummary()
    this.country = countries.find(e => e.country == this.$route.query.q)
    console.log(this.country)
    this.data.label = this.country.country
    this.data.labels.push(
      'Cases','Today Cases',
      'Deaths','Today Deaths',
      'Recovered', 'Today Recovered',
      'Active', 'Critical')
    this.data.values.push(
      this.country.cases, this.country.todayCases,
      this.country.deaths, this.country.todayDeaths,
      this.country.recovered, this.country.todayRecovered,
      this.country.active, this.country.critical
    )
    this.date = new Date()
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
    <a href="#pie-charts">Go To Bar Chart</a>
    <div class="comparison-container">
      <div class="comparison"><p class="value">Today Deaths <p>{{country.todayDeaths}}</p></p></div>
      <div class="comparison"><p class="value">Deaths <p >{{country.deaths}}</p> </p></div>
      <div class="comparison"><p class="value">Today Cases <p >{{country.todayCases}}</p> </p></div>
      <div class="comparison"><p class="value">Cases <p >{{country.cases}}</p> </p></div>
      <div class="comparison"><p class="value">Today Recovered <p >{{country.todayRecovered}}</p> </p></div>
      <div class="comparison"><p class="value">Recovered <p >{{country.recovered}}</p> </p></div>      
    </div>
    <div v-if="country" id="pie-charts">
      <div  class="pie-chart-container">
        <h2 class="comparison-title">{{date}}</h2>
        <bar-chart :data='this.data'></bar-chart>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  html {
    font-weight: 200;
  }
  h2,p  {
    font-family: 'Times New Roman', Times, serif;
  }
  .country {
    // background-color: #ffd000;
    text-align: center;
  }
  .country a {
    color: #ffbb00;
    font-size: 18px;
  }
  .country a:hover {
    color: #ffd000;
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
  .pie-chart-container {
    max-width: 50rem;
    margin: 6rem auto;
    box-shadow: 0 0 10px rgb(199, 199, 199);
    border-radius: 8px;
    // background: linear-gradient(45deg,#ffd900,#BA00FF);
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    color: black;
  }
  .comparison-title {
    padding-top: 1rem;
    text-transform: uppercase;
    flex: 0.5;
  }
  .pie-chart {
    padding-bottom: 3rem;
    width: 100%;
  }
  table {
    width: 40%;
    padding: 1.5rem;
    margin-left: 2rem;
    align-items: center;
  }
</style>