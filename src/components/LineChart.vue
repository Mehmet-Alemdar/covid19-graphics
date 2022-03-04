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
        labels: [],
        values: [],
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
        labels: this.data.labels,
        datasets: [{
          label: this.data.continent,
          borderWidth: 1,
          borderColor: 'rgba(0, 127, 112,1)',
          backgroundColor:'rgba(0, 202, 179,0.5)',
          data: this.data.values
        }]
      }
        
      this.renderChart(chartData, this.options)
    },
    methods: {
      ...mapActions(['fetchSummary'])
    }
  }
</script>