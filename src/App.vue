<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import store from './store/store.js'
export default {
  name: 'App',
  components: {
    Navbar
  }

}
</script>

<style scoped>
body{
  background-color: rgb(231, 231, 231)
}
</style>

