<template>
  <div id="app">
    <div id="nav">
      <h1>Covid 19 Graphics</h1>
      <select name="countries">
        <option value="">Countries</option>
      </select>
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
