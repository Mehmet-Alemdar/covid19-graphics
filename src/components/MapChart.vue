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
    highColor="#007F70"
    lowColor="#00CAB3"
    countryStrokeColor="#fff"
    legendHeaderBackgroundColor="#fff"
    legendContentBackgroundColor="#fff"
    />
  </div>
  
</template>