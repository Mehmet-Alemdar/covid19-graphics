<script>
import Map from 'vue-chart-map'
export default {
  name: 'MapChart',
  components: {
    Map
  },
  props: {
    countriesData: {}
  }
}
</script>

<template>
  <div>
    <Map
    :countryData="countriesData"
    highColor="#F40303"
    lowColor="#F4E103"
    countryStrokeColor="#fff"
    legendHeaderBackgroundColor="#00D4E0"
    />
  </div>
  
</template>