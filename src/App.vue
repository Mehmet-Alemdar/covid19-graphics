
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      countries: []
    }
  },
  async mounted () {
    this.countries = await this.fetchCountries()
  },
  methods: {
    ...mapActions(['fetchCountries'])
  }
}
</script>

<template>
  <div id="app">
    <div id="nav">
      <h1>Covid 19 Graphics</h1>
      <div v-if="countries.length" class="countries">
        <form>
          <select name="country" onchange="this.form.submit()">
            <option value="">Countries</option>
            <option  v-for="country in countries">{{country.Country}}</option>
          </select>
        </form>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  color: #ffffff;
  background-color: #FF5733;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

#nav {
  padding: 30px;
}

select {
  width: 280px;
  height: 50px;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  border: 2px solid white;
  background-color: #FF5733;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #ffffff;
}
</style>
