
<script>
import ValuesCard from '@/components/ValuesCard'
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      global: {}
    }
  },
  components: {
    ValuesCard
  },
  async mounted () {
    const summary = await this.fetchSummary()
    this.global = summary.Global
    const date = new Date()
    this.global.Date = date.toLocaleString('en-US',{
      weekday: 'long',
      day:'numeric',
      year:'numeric'
    })
  },
  methods: {
    ...mapActions(['fetchSummary'])
  }
}
</script>

<template>
  <div class="home">
    <values-card v-bind:global='this.global'></values-card>
  </div>
</template>

