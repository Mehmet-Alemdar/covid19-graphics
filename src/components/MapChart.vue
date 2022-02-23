<script>
import Map from 'vue-chart-map'
export default {
  name: 'MapChart',
  components: {
    Map
  },
  data () {
    return {
      dummyData: {
        'US' : 60,
        'CA': 7,
        'GB' : 8,
        'IE' : 14
      }
    }
  }
}
</script>

<template>
  <Map
    :countryData="dummyData"
    />
</template>