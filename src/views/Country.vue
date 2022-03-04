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
    this.date = await this.currentDate()
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
  },
  methods: {
    ...mapActions(['fetchSummary', 'currentDate'])
  }
}
</script>

<template>
  <div class="country">
    <div class="summary-container">
      <p class="title">{{country.country}}</p>
      <img :src="country.countryInfo.flag" alt="">
      <p>Population: {{country.population}}</p>
      <p>Active: {{country.active}}</p>
      <p>Critical: {{country.critical}}</p>
    </div>
    <div class="bar-chart-href">
      <a href="#bar-chart">Go To Bar Chart</a>
    </div>
    <div class="comparison-container">
      <div class="comparison">
        <div><p>Today Deaths <p class="value">{{country.todayDeaths}}</p></p></div>
        <div><p>Deaths <p class="value">{{country.deaths}}</p> </p></div>
      </div>
      <div class="comparison">
        <div><p>Today Cases <p class="value">{{country.todayCases}}</p> </p></div>
        <div><p>Cases <p class="value">{{country.cases}}</p> </p></div>
      </div>
      <div class="comparison">
        <div><p>Today Recovered <p class="value">{{country.todayRecovered}}</p> </p></div>
        <div><p>Recovered <p class="value">{{country.recovered}}</p> </p></div>
      </div>
    </div>
    <div v-if="country" id="bar-chart">
      <div  class="bar-chart-container">
        <p class="comparison-title">{{date}}</p>
        <bar-chart :data='this.data'></bar-chart>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.country {
  text-align: center;
  font-weight: 200;
}
.title {
  text-transform: uppercase;
}
.summary-container {
  max-width: 50rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 3rem auto;
  padding: 0.5rem;
  border-radius: 5px;
}
.bar-chart-href {
  margin: 1rem auto;
  width: 15rem;
  display: flex;
  background-color: aqua;
}
.bar-chart-href a {
  flex: 1;
  padding: 0.5rem;
  background-color: #db2f08;
  box-shadow: 0 0 7px rgb(196, 196, 196);
  color: white;
  text-decoration: none !important;
}
.bar-chart-href a:hover{
  background-color: #db0972;
}
.comparison-container {
  max-width: 60rem;
  margin: 3rem auto;
  display: flex;
  gap: 1.5rem;
  text-align: center;
}
.comparison {
  flex: 1;
  background: linear-gradient(45deg,#db2f08,#db0972);
  padding: 1.5rem 0;
  border-radius: 4px;
  box-shadow: 0 0 8px #d61d7a;
  color: black;
}
.value {
  color: white;
}
.bar-chart-container {
  max-width: 50rem;
  margin: 5rem auto;
  box-shadow: 0 0 8px rgb(196, 196, 196);
  border-radius: 8px;
  padding: 0.5rem 0.5rem;
}
@media screen and (max-width: 750px)  {
  .summary-container {
    width: 25rem;
  }
  .comparison-container {
    width: 20rem;
    flex-direction: column;
  }
  .bar-chart-container {
    width: 27rem;
  }
}
</style>