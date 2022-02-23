
<script>
import MapChart from '@/components/MapChart'
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    MapChart
  },
  async mounted () {
  },
  methods: {
    ...mapActions(['fetchSummary'])
  }
}
</script>

<template>
  <div class="home">
  </div>
</template>

