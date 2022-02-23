
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
    <map-chart :countriesData="countriesData"></map-chart>
  </div>
</template>

