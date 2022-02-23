
<script>
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
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

