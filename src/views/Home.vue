
<script>
import MapChart from '@/components/MapChart'
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      countriesData: {}
    }
  },
  components: {
    MapChart
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
</style>
