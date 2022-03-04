<script>
  import { Line } from 'vue-chartjs'
  import { mapActions} from 'vuex'
  export default {
    extends: Line,
    props: {
      data: []
    },
    data() {
      return {
        options: {
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                min:0
              }
            }]
          }
        }
      }
    },
    async mounted() {
      let chartData = {
        labels: ['Active','Cases','Critical','Recovered','Deaths','Test'],
        datasets: this.data
      }
        
      this.renderChart(chartData, this.options)
    },
    methods: {
      ...mapActions(['fetchSummary'])
    }
  }
</script>