
<script>
import LineChart from '@/components/LineChart'
import MapChart from '@/components/MapChart'
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      countriesData : {}
    }
  },
  components: {
    MapChart,
    LineChart
  },
  async mounted () {
    const countries = await this.fetchSummary()

    countries.forEach(element => {
      this.countriesData[element.countryInfo.iso2] = element.active
    })
  },
  methods: {
    ...mapActions(['fetchSummary'])
  }
}
</script>

<template>
  <div class="home">
    <map-chart class="map" :countriesData="countriesData"></map-chart>
    <line-chart class="line-chart" continent='Asia'></line-chart>
    <line-chart class="line-chart" continent='Europe'></line-chart>
    <line-chart class="line-chart" continent='Africa'></line-chart>
    <line-chart class="line-chart" continent='North America'></line-chart>
    <line-chart class="line-chart" continent='South America'></line-chart>
    <line-chart class="line-chart" continent='Australia-Oceania'></line-chart>
  </div>
</template>

<style lang="scss">
.home {
  margin: 50px auto;
}
.map {
  max-width: 950px;
  box-shadow: 0 0 10px rgb(202, 202, 202);
  margin: 0 auto;
  padding:10px;
  background-color: white;
  border-radius: 8px;
}
.line-chart {
  max-width: 72rem;
  margin: 3rem auto;
  box-shadow: 0 0 10px rgb(194, 194, 194);
  padding: 0.5rem;
  background-color: white;
  border-radius: 5px;
}
</style>
