
<script>
import { mapActions } from 'vuex'
import LineChart from '@/components/CompareLineChart.vue'
export default {
  data () {
    return {
      //checkboxes: [],
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
    compareCountries: function() {
      this.selectedCountries = []
      if(this.checked.length > 1){
        this.clicked = true
        this.summary.forEach(element => {
          this.checked.find(i => {
            if(i == element.country) {
              this.selectedCountries.push({
                label: element.country,
                data: [
                  element.active,
                  element.cases,
                  element.critical,
                  element.deaths,
                  element.recovered,
                  element.tests
                ],
                borderWidth: 1,
                borderColor: [
                  'rgba(243, 0, 0, 1)',
                  'rgba(243, 161, 0, 1)',
                  'rgba(153, 240, 0, 1)',
                  'rgba(0, 38, 237, 1)',
                  'rgba(0, 234, 240, 1)',
                  'rgba(0, 140, 240, 1)',
                  
                ],
                backgroundColor: [
                  'rgba(243, 0, 0, 0.2)',
                  'rgba(243, 161, 0, 0.2)',
                  'rgba(153, 240, 0, 0.2)',
                  'rgba(0, 38, 237, 0.2)',
                  'rgba(0, 234, 240, 0.2)',
                  'rgba(0, 140, 240, 0.2)',
                ]
              })
            }
          })
        })
        this.clicked = true
      }else{
        alert('no')
        this.clicked = false
      }
      // this.clicked = false
      // console.log(this.selectedCountries)
      // const chartDiv = document.querySelector('.chart')
      // console.log(chartDiv)
      // console.log(this.checked)
      // console.log(this.selectedCountries)
      // countries.forEach(element => {
      //   this.data.find(i => {
      //     if(i.continent == element.continent){
      //       i.labels.push(element.country)
      //       i.values.push(element.active)
      //       this.loaded = true
      //     }
      //   })
      // })
    }
  }
}
</script>
<template lang="html">
  <div class="compare">
    <div class="explanation">
      <p>Select the countries you want to compare covid 19 data to</p>
    </div>
    <div class="country-select">
      <div class="country-list" v-if="countries">
        <div class="checkbox"  v-for="country in countries">
          <input type="checkbox" id="country" :value="country" v-model="checked" v-on:click="check">
          <label for="country">{{country}}</label>
        </div>
      </div>
      <div class="selected" v-if="checked">
        <div class="selected-country" v-for="country in checked">
          <button :value="country" v-on:click='uncheck($event)' > x </button>
          <p>{{country}}</p>
        </div>
      </div>
    </div>
    <button class="compare-button" v-on:click="compareCountries">Compare</button>
    <div class="chart">
      <line-chart v-if="this.clicked" :data="selectedCountries"></line-chart>
    </div>
  </div>
</template>

<style lang="scss">
.compare {
  margin: 2rem auto;
  display: grid;
  max-width: 75rem;
  grid-template-columns:1fr;
  grid-template-areas: "explanation"
                       "countrySelect"
                       "compareButton"
                        "charts";
  gap:1rem;
}
.explanation {
  grid-area: explanation;
  text-align: center;
}
.country-select {
  grid-area: countrySelect;
  background-color: beige;
  display: grid;
  grid-template-columns: 0.4fr 1.5fr;
  grid-template-areas: "countryList selected";
  gap:1rem;
}
.country-list {
  grid-area: countryList;
  width: 15rem;
  height: 15rem;
  font-size: 20px;
  border: 1px solid gray;
  overflow-y: scroll;
}
.checkbox {
  padding: 0.7rem;
}
.checkbox:nth-child(odd) {
  background-color: rgb(221, 221, 221);
}
.checkbox:nth-child(even) {
  background-color: rgb(233, 233, 233);
}
.selected {
  grid-area: selected;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.selected-country {
  width: 10rem;
  height: 10rem;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 0 0.5rem;
  
}
.country p {
  font-size: 25px;
}
.compare-button {
  grid-area: compareButton;
}
.charts {
  grid-area: charts;
}
</style>