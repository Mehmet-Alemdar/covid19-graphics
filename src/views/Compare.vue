
<script>
import { mapActions } from 'vuex'
import LineChart from '@/components/CompareLineChart.vue'
export default {
  data () {
    return {
      summary: [],
      countries: [],
      checked: [],
      selectedCountries: [],
      clicked: false
    }
  },
  components: {
    LineChart
  },
  async mounted () {
    this.summary = await this.fetchSummary()
    this.summary.forEach(element => {
      this.countries.push(element.country)
    })
  },
  methods: {
    ...mapActions(['fetchSummary']),
    check: function() {
      this.clicked = false
    },
    uncheck: function (e) {
      this.clicked = false
      const countryIndex = this.checked.indexOf(e.target.value)
      this.checked.splice(countryIndex,1)
    },
    uncheckAll: function () {
      this.clicked = false
      this.checked = []
    },
    scrollToChart: function () {
      const chart = document.querySelector('#chart')
      chart.scrollIntoView()
    },
    compareCountries: function() {
      this.selectedCountries = []
      if(this.checked.length > 1){
        this.clicked = true
        this.summary.forEach(element => {
          this.checked.find(i => {
            if(i == element.country) {

              var r = () => Math.random() * 256 >> 0;
              var color = `${r()}, ${r()}, ${r()}`;

              this.selectedCountries.push({
                label: element.country,
                data: [
                  element.active,
                  element.cases,
                  element.critical,
                  element.recovered,
                  element.deaths,
                  element.tests
                ],
                borderWidth: 1,
                borderColor: `rgb(${color})`,
                backgroundColor: `rgba(${color},0.2)`
              })
            }
          })
        })
        this.clicked = true
        const chart = document.querySelector('.chart')
        chart.scrollIntoView()
      }else{
        alert('At least two countries should be selected for comparison')
        this.clicked = false
      }
    }
  }
}
</script>
<template>
  <div class="compare">
    <div class="explanation">
      <p>Select the countries you want to compare Coronavirus data to</p>
    </div>
    <div class="country-select">
      <div v-if="countries.length > 0">
        <div class="country-list">
          <div class="checkbox"  v-for="country in countries">
            <input type="checkbox" id="country" :value="country" v-model="checked" v-on:click="check">
            <label for="country">{{country}}</label>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="country-list">
          <div class="loader"></div>
        </div>
      </div>
      <div class="selected">
        <div class="button-clear-all">
          <button v-on:click="uncheckAll">Clear All</button>
        </div>
        <div  class="selected-country">
          <div class="country-card" v-for="country in checked">
            <button :value="country" v-on:click='uncheck($event)' > x </button>
            <p>{{country}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="compare-button">
      <button v-on:click="compareCountries">Compare</button>
    </div>
    <div v-if="this.clicked">
      <div class="chart" >
        <line-chart class="compare-chart"  :data="selectedCountries"></line-chart>
      </div>
    </div>
    <div v-else>
      <div class="chart">
        <p>To see the graph comparing the countries, select the countries and press the compare button.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.compare {
  margin: 0 auto;
  padding-bottom: 4rem;
}
.explanation {
  text-align: center;
}
.country-select {
  margin: 1rem auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.country-list {
  background: linear-gradient(90deg,#db2f08,#db0972);
  width: 15rem;
  height: 20rem;
  overflow-y: scroll;
  color: white;
  padding: 0.5rem;
  box-shadow: 0 0 8px rgba(0, 0, 0,0.2);
}
.checkbox {
  padding: 0.5rem;
  border-bottom: 1px solid white;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
}
.selected {
  width: 60%;
  margin-left: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 8px rgba(0, 0, 0,0.2);
}
.button-clear-all {
  text-align: center;
  height: 10%;
}
.button-clear-all button {
  height: 100%;
  width: 7rem;
  border: none;
  background-color: #db2f08;
  color: white;
  cursor: pointer;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.button-clear-all button:hover {
  background-color: #db0972;

}
.selected-country {
  margin: 0 auto;
  max-width: 100%;
  height: 19rem;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
}
.country-card {
  min-width: 11rem;
  min-height: 10rem;
  background: linear-gradient(45deg,#db2f08,#db0972);
  color: white;
  font-size: 1.5rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.country-card button {
  color: white;
  border: none !important;
  background-color: rgba(0, 0, 0, 0.1);
  cursor:pointer;
  padding: 0.1rem 1rem;
}
.country-card button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.country-card p {
  flex: 2;
  display: flex;
  align-items: center;
}
.compare-button {
  margin: 1rem auto;
  text-align: center;
}
.compare-button button {
  border: none !important;
  margin: 1rem;
  width: 10rem;
  height: 2rem;
  color: white;
  background-color:#db2f08;
  box-shadow: 0 0 5px #db0972;
  cursor: pointer;
}
.compare-button button:hover {
  background-color: #db0972;
}
.chart {
  background-color: white;
  margin: 2rem auto;
  max-width: 72rem;
  height: 25rem;
  background: linear-gradient(90deg,#db2f08,#db0972);
  
  border-radius: 10px;
  color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.compare-chart {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 0 10px rgb(214, 214, 214);
}
.loader {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #db0972;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
  margin: 50% auto;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media screen and(max-width:750px) {
  .compare {
    margin: 1rem;
  }
  .country-list {
    width: 10rem;
  }
  .button-clear-all button {
    height: 1.5rem;
  }
  .selected-country {
    width: 10rem;
    flex-direction: column;
    overflow-x: auto;
    overflow-y: auto;
  }
  .country-card {
    min-width:8rem;
    min-height: 5rem;
    font-size: 1rem;
  }
}

</style>