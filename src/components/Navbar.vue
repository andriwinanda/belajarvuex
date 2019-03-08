<template>
  <nav class="navbar is-primary" v-if="hasNav">
    <div class="navbar-brand">
      <a class="navbar-item">
      <img src="../assets/logo.png" alt="Buefy">
      </a>
      <span class="navbar-burger burger" data-target="navbarMenu" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end">
  		  <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/satu">!</router-link>
        <router-link class="navbar-item" to="/dua">@</router-link>
        <div class="navbar-item">
  		    <a class="button" v-if="isLoggedIn" @click.prevent="logout">Logout</a>
  		    <router-link to="/login" class="button" v-if="!isLoggedIn">Login</router-link>
        </div>
       
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Navbar',
  data() {
    return {
      showNav: false
    }
  },
  methods: 
    mapActions([
      'logout'
    ])
  ,
  computed: {
    ...mapGetters(['isLoggedIn']),
    hasNav (){
      return ![
        '/login',
        '/satu',
        '/forget'
      ].some( element => element === this.$route.path)
    }
  }
}
</script>
