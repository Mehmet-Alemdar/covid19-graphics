<script>
  import { Bar } from 'vue-chartjs'
  import { mapActions } from 'vuex'
  export default {
    extends: Bar,
    data() {
      return {
        labels: [],
        values: [],
        options: {
          maintainAspectRatio: false,
        }
      }
    },
    props: {
      data: []
    },
    async mounted() {
      let chartData = {
        labels: this.data.labels,
        datasets: [{
          label: this.data.label,
          borderWidth: 1,
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(22, 206, 86, 1)',
            'rgba(34, 192, 192, 1)'        
            ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(225, 206, 86, 0.2)',
            'rgba(45, 192, 192, 0.2)',            
          ],
          data: this.data.values
        }]
      }
        
      this.renderChart(chartData, this.options)
    }
  }
</script>