<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import ValuesCard from '@/components/ValuesCard'
export default {
  name: 'Home',
  components: {
    HelloWorld
    ValuesCard
  }
}
</script>
<template>
  <div class="home">
    <values-card></values-card>
  </div>
</template>

