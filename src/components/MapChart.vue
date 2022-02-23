<script>
import Map from 'vue-chart-map'
export default {
  name: 'MapChart',
  components: {
    Map
  },
  props: {
    countriesData: ''
  }
}
</script>

<template>
  <div>
    <Map
    :countryData="countriesData"
    />
  </div>
  
</template>