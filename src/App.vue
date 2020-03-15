<template>
  <div id="app">

    <Header/>

    <router-view/>

    <Footer/>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    'Header': Header,
    'Footer': Footer
  }
}
</script>

<style>
  @import './assets/css/reset.css';
  #app {
    padding: 0 60px;
    font-family: 'ProximaNova', 'Avenir', Helvetica, Arial, sans-serif;
    color: #4e5155;
  }
</style>
