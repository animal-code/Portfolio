<template>
  <div id="app">
    <Header/>

    <router-view/>

    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import './assets/scss/app';

  #app {
    font-family: 'ProximaNova', 'Avenir', Helvetica, Arial, sans-serif; font-weight: 500; transition-property: background; @include ease-out(.5s); min-height: 100vh; background: $back--light; color: $color--light;
    #contents-wrap {position: relative; margin-top: 100px;
        #page-title {position: absolute; left: 60px; top: 0;}
        .contents {width: 100%; margin: 0 auto; max-width: 960px;}
    }

    &.theme--dark {
      background: $back--dark;
      color: $color--dark;
    }
  }
</style>
