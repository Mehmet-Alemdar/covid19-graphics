<script>
import { mapActions } from 'vuex';
import PieChart from '@/components/PieChart'
export default {
  name: 'Country',
  data () {
    return {
      country: {}
    }
  },
  components: {
    PieChart
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
    <a href="#pie-charts">Go To Pie Charts</a>
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
        <h2 class="comparison-title">Deaths</h2>
        <pie-chart class="pie-chart" :data='{label: ["Deaths","Today Deaths"], value:[country.deaths,country.todayDeaths]}'></pie-chart>
        <table>
          <tr>
            <th>Deaths</th>
            <th>Today Deaths</th>
          </tr>
          <tr>
            <td>{{country.deaths}}</td>
            <td>{{country.todayDeaths}}</td>
          </tr>
        </table>
      </div>
      <div  class="pie-chart-container">
        <h2 class="comparison-title">Cases</h2>
        <pie-chart class="pie-chart" :data='{label: ["Cases","Today Cases"], value:[country.cases,country.todayCases]}'></pie-chart>
        <table>
          <tr>
            <th>Cases</th>
            <th>Today Cases</th>
          </tr>
          <tr>
            <td>{{country.cases}}</td>
            <td>{{country.todayCases}}</td>
          </tr>
        </table>
      </div>
      <div  class="pie-chart-container">
        <h2 class="comparison-title">Recovered</h2>
        <pie-chart class="pie-chart" :data='{label: ["Recovered","Today Recovered"], value:[country.recovered,country.todayRecovered]}'></pie-chart>
        <table>
          <tr>
            <th>Recovered</th>
            <th>Today Recovered</th>
          </tr>
          <tr>
            <td>{{country.recovered}}</td>
            <td>{{country.todayRecovered}}</td>
          </tr>
        </table>
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
    background: linear-gradient(45deg,#ffd900,#BA00FF);
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    color: white;
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