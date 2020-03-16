<template>
  <div id="app" class="theme--light">

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

<style lang="scss">
  @import './assets/scss/app';

  #app {
    padding: 0 60px; font-family: 'ProximaNova', 'Avenir', Helvetica, Arial, sans-serif; transition-property: background; @include ease-out(.5s); min-height: 100vh;
    &.theme--light {
      background: $back--light;
      color: $color--light;
    }
    &.theme--dark {
      background: $back--dark;
      color: $color--dark;
    }
  }
</style>
