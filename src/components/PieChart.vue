<script>
  import { Pie } from 'vue-chartjs'
  import { mapActions } from 'vuex'
  export default {
    extends: Pie,
    props: {
      data: []
    },
    data() {
      return {
        labelsOne: [],
        values: Number,
        valuesT: Number,
        options: {
          maintainAspectRatio: false,
          responsive: true,
          sclales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      }
    },
    async mounted() {
      let chartData = {
        labels: this.data.label,
        datasets: [{
          borderWidth: 1,
          borderColor: [
            'rgba(0, 229, 217,1)',
            'rgba(60, 195, 0, 1)'
            ],
          backgroundColor: [
            'rgba(0, 229, 217, 0.5)',
            'rgba(60, 195, 0, 0.5)'          
          ],
          data: this.data.value
        }]
      }
      this.renderChart(chartData, this.options)
    },
    methods: {
      ...mapActions(['fetchSummary'])
    }
  }
</script>