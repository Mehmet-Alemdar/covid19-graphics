
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
      <h3 class="go-to-home" v-on:click="goToHomePage()">Covid 19 Graphics</h3>
      <div class="bar">
        <router-link class="bar-element router" to="/compare">Compare countries</router-link>
        <div v-if="countries.length" class="countries">
          <form action="country">
            <select class="bar-element" name="q" onchange="this.form.submit()">
              <option value="">Countries</option>
              <option  v-for="country in countries">{{country}}</option>
            </select>
          </form>
        </div>
        <div v-else>
          <select class="bar-element" name="q" onchange="this.form.submit()">
            <option value="">Countries</option>
          </select>
        </div>
        <a class="bar-element router" href="https://en.wikipedia.org/wiki/Coronavirus" target="_blank">More About Coronavirus</a>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: whitesmoke;
  
}
#app {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
#nav {
  padding: 1rem 1rem 0 1rem;
  background: linear-gradient(90deg,#db2f08,#db0972);
  color: #ffffff;
}
.go-to-home {
  cursor: pointer;
}
.go-to-home:hover {
  color:#FFC800;
}
.bar {
  margin: 0 auto;
  display: flex;
  max-width: 90%;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  text-align: center;
  align-items: center;
}
.bar-element {
  font-size: 1.04rem;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
  text-decoration: none;
  cursor: pointer;
}
select {
  height: 2rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
}
.router:hover {
  color:#FFC800;
}
@media screen and (max-width: 750px) {
  .bar {
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1rem;
  }
}
</style>
