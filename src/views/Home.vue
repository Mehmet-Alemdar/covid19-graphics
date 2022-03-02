
<script>
import LineChart from '@/components/LineChart'
import MapChart from '@/components/MapChart'
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      countriesData : {},
      data: [
        {continent:'Asia', labels: [], values: []},
        {continent:'Europe', labels: [], values: []},
        {continent:'Africa', labels: [], values: []},
        {continent:'North America', labels: [], values: []},
        {continent:'South America', labels: [], values: []},
        {continent:'Australia-Oceania', labels: [], values: []}
      ],
      loaded: false
    }
  },
  components: {
    MapChart,
    LineChart
  },
  async mounted () {
    const countries = await this.fetchSummary()
    countries.forEach(element => {
      this.data.find(i => {
        if(i.continent == element.continent){
          i.labels.push(element.country)
          i.values.push(element.active)
          this.loaded = true
        }
      })
    })

    countries.forEach(element => {
      this.countriesData[element.countryInfo.iso2] = element.active
    })
    
  },
  methods: {
    ...mapActions(['fetchSummary']),
    scrollToContinets: function () {
      const continentsBar = document.querySelector('#continents')
      continentsBar.scrollIntoView()
    }
  }
}
</script>
<template>
  <div class="home">
    <div class="container line-chart-href">
      <a href="#continents">View The Line Charts</a>
    </div>
    <div v-if="this.loaded">
      <map-chart class="map" :countriesData="countriesData"></map-chart>
    </div>
    <div v-else>
      <div class="map">
        <div class="loader"></div>
      </div>
    </div>
    <div class="container continent-href" id="continents">
      <a href="#asia">Asia</a>
      <a href="#europe">Europe</a>
      <a href="#africa">Africa</a>
      <a href="#north-america">North America</a>
      <a href="#south-america">South America</a>
      <a href="#australia-oceania">Australia-Oceania</a>
    </div>
    <div v-if="this.loaded">
      <div class="chart-container">
        <line-chart id="asia" class="line-chart" :data="{continent: this.data[0].continent, labels: this.data[0].labels, values: this.data[0].values}"></line-chart>
        <p class="info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        <div class="chart-container-bottom">
          <button class="go-to-continents" v-on:click='scrollToContinets()'>Go to continents</button>
          <p class="date">25.02.2022</p>
        </div>
      </div>
      <div class="chart-container">
        <line-chart id="europe" class="line-chart" :data="{continent: this.data[1].continent, labels: this.data[1].labels, values: this.data[1].values}" ></line-chart>
        <p class="info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        <div class="chart-container-bottom">
          <button class="go-to-continents" v-on:click='scrollToContinets()'>Go to continents</button>
          <p class="date">25.02.2022</p>
        </div>      
      </div>
      <div class="chart-container">
        <line-chart id="africa" class="line-chart" :data="{continent: this.data[2].continent, labels: this.data[2].labels, values: this.data[2].values}" ></line-chart>
        <p class="info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        <div class="chart-container-bottom">
          <button class="go-to-continents" v-on:click='scrollToContinets()'>Go to continents</button>
          <p class="date">25.02.2022</p>
        </div>      
      </div>
      <div class="chart-container">
        <line-chart id="north-america" class="line-chart" :data="{continent: this.data[3].continent, labels: this.data[3].labels, values: this.data[3].values}" ></line-chart>
        <p class="info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        <div class="chart-container-bottom">
          <button class="go-to-continents" v-on:click='scrollToContinets()'>Go to continents</button>
          <p class="date">25.02.2022</p>
        </div>      
      </div>
      <div class="chart-container">
      <line-chart id="south-america" class="line-chart" :data="{continent: this.data[4].continent, labels: this.data[4].labels, values: this.data[4].values}" ></line-chart>
        <p class="info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        <div class="chart-container-bottom">
          <button class="go-to-continents" v-on:click='scrollToContinets()'>Go to continents</button>
          <p class="date">25.02.2022</p>
        </div>      
      </div>
      <div class="chart-container">
        <line-chart id="australia-oceania" class="line-chart" :data="{continent: this.data[5].continent, labels: this.data[5].labels, values: this.data[5].values}" ></line-chart>
        <p class="info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        <div class="chart-container-bottom">
          <button class="go-to-continents" v-on:click='scrollToContinets()'>Go to continents</button>
          <p class="date">25.02.2022</p>
        </div>      
      </div>
    </div>
  </div>
</template>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
.home {
  margin: 50px auto;
}
.container {
  box-shadow: 0 0 3px rgb(182, 182, 182);
  background-color: white;
  border-radius: 4px;
  text-align: center;
  margin: 0 auto;
}
.line-chart-href {
  width: 15rem;
  display: flex;
}
.line-chart-href a {
  flex: 1;
  padding: 0.5rem;
  background-color: #db2f08;

  box-shadow: 0 0 7px rgb(196, 196, 196);
  color: black;
}
.line-chart-href a:hover{
  background-color: #db0972;

}
.home a {
  text-decoration: none !important;
  color: white;
}
.map {
  max-width: 55rem;
  height: 35rem;
  margin: 2rem auto;
  padding:10px;
  background-color: rgba(255,255,255,0.1);
  border-radius: 8px;
}
.continent-href {
  max-width: 70%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  text-align: center;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(90deg,#db2f08,#db0972); 
}
.continent-href a {
  flex: 1;
  box-shadow: 0 0 1px rgb(0, 0, 0);
  width: 4rem;
  height: 4rem;
  font-size: 0.9rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.continent-href a:hover {
  box-shadow: 0 0 2px rgb(0, 0, 0);
}
.chart-container {
  max-width: 72rem;
  max-height: 45rem;
  margin: 3rem auto;
  background: linear-gradient(90deg,#db2f08,#db0972);
  border-radius: 5px;
  box-shadow: 0 0 10px rgb(194, 194, 194);
  text-align: center;
}
.line-chart {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 0.5rem;
  background-color: white;
}
.info {
  padding: 0.5rem 2rem;
  font-size: 1rem;
  color: white;
}
.go-to-continents {
  padding: 0.7rem 2rem;
  margin-left: 6rem;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
}
.go-to-continents:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
.date {
  float: right;
  margin-right: 1rem;
  color: white;
  font-size: 0.8rem;
}
.loader {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #db0972;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
  margin: 30% auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media screen and(max-width:750px) {
  .continent-href {
    flex-direction: column;
  }
  .continent-href a {
    width: 9rem;
    padding: 0.3rem;
  }

}
</style>
