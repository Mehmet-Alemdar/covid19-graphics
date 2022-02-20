<script>
export default {
  name: 'ValuesCard',
  props: {
    date: String,
    NewConfirmed: Number,
    TotalConfirmed: Number,
    NewDeaths:Number,
    TotalDeaths:Number,
    NewRecovered:Number,
    TotalRecovered:Number
  }
}
</script>

<template>
  <div class="container">
    <div class="date-container">
      <p class="date">{{ date }}</p>
    </div>
    <div class="values-container">
      <div class="confirmed values">
        <div class="element">
          <h2 class="new-confirmed label">New Confirmed</h2>
          <p class="value">{{ NewConfirmed }}</p>
        </div>
        <div class="element">
          <h2 class="total-confirmed label">Total Confirmed</h2>
          <p class="value">{{ TotalConfirmed }}</p>
        </div>
      </div>
      <div class="deaths values">
        <div class="element">
          <h2 class="new-deaths label">New Deaths</h2>
          <p class="value">{{ NewDeaths }}</p>
        </div>
        <div class="element">
          <h2 class="total-deaths label">Total Deaths</h2>
          <p class="value">{{ TotalDeaths }}</p>
        </div>
      </div>
      <div class="recovered values">
        <div class="element">
          <h2 class="new-recovered label">New Recovered</h2>
          <p class="value">{{ NewRecovered }}</p>
        </div>
       <div class="element">
         <h2 class="total-recovered label">Total Revocered</h2>
          <p class="value">{{ TotalRecovered }}</p>
       </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .container {
    max-width: 60rem;
    margin: 0 auto;
    box-shadow: 0 0 10px gray;
    border-radius: 8px;
    padding: 0 10px 40px 10px;
    background-color: white;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 200;
  }
  .date-container {
    width: 30%;
    margin: 0 auto;
    background-color: white;
    text-align: center;
  }
  .date {
    padding: 5px;
  }
  .values-container {
    display: grid;
    grid-template-columns:1fr 1fr 1fr ;
    gap: 1em;
    margin-top: 30px;
  }
  .values  {
    text-align: center;
    box-shadow: 0 0 5px gray;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    background-color: rgba(59, 59, 59, 0.1);
    border-radius: 3px;
  }
  .element:first-child {
    margin-top: 50px;
  }
  .element:last-child{
    margin-top: 60px;
    margin-bottom: 50px;
  }
  .value {
    font-size: 23px;
    color: #8E44AD;
  }
  .new-confirmed {
    flex: 2;
  }
</style>