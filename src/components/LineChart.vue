<script>
  import { Line } from 'vue-chartjs'
  import { mapActions } from 'vuex'
  export default {
    extends: Line,
    props: {
      continent: ''
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
                stepSize: 100,
                max: 1000,
                min:0
              }
            }]
          }
        }
      }
    },
    async mounted() {
      const summary = await this.fetchSummary()

      summary.forEach(element => {
        if(element.continent === this.continent){
          this.labels.push(element.country)
          this.values.push(element.active)
        }
      })

      let chartData = {
        labels: this.labels,
        datasets: [{
          label: this.continent,
          borderWidth: 1,
          borderColor: [
            'rgba(243, 0, 0, 1)',
            'rgba(243, 161, 0, 1)',
            'rgba(153, 240, 0, 1)',
            'rgba(0, 38, 237, 1)',
            'rgba(0, 234, 240, 1)',
            'rgba(0, 140, 240, 1)',
            'rgba(16, 0, 240, 1)',
            'rgba(135, 0, 240, 1)',
            'rgba(200, 0, 240, 1)',
            'rgba(237, 0, 150, 1)'
            ],
          backgroundColor: [
            'rgba(243, 0, 0, 0.2)',
            'rgba(243, 161, 0, 0.2)',
            'rgba(153, 240, 0, 0.2)',
            'rgba(0, 38, 237, 0.2)',
            'rgba(0, 234, 240, 0.2)',
            'rgba(0, 140, 240, 0.2)',
            'rgba(16, 0, 240, 0.2)',
            'rgba(135, 0, 240, 0.2)',
            'rgba(200, 0, 240, 0.2)',
            'rgba(237, 0, 150, 0.2)'
          ],
          data: this.values
        }]
      }
        
      this.renderChart(chartData, this.options)
    },
    methods: {
      ...mapActions(['fetchSummary'])
    }
  }
</script>