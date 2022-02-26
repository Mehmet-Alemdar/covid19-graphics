
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
    ...mapActions(['fetchCountries']),
    goToHomePage : function () {
      window.location.href = "/"
    }
  }
}
</script>

<template>
  <div id="app">
    <div id="nav">
      <h3 v-on:click="goToHomePage()">Covid 19 Graphics</h3>
      <div v-if="countries.length" class="countries">
        <form action="country">
          <select name="q" onchange="this.form.submit()">
            <option value="">Countries</option>
            <option  v-for="country in countries">{{country}}</option>
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
h3 {
  cursor: pointer;
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
