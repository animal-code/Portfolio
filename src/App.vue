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
body, #subMenu {background: $back--light; transition-property: background; @include ease-out(.5s);}
body {color: $color--light;
  #app {
    font-family: 'ProximaNova', 'Avenir', Helvetica, Arial, sans-serif; font-weight: 500; min-height: 100vh;
    #contents-wrap {position: relative; margin-top: 100px;
        #page-title {position: absolute; left: 60px; top: 0;}
        .contents {width: 60%; margin: 0 auto; max-width: 960px; box-sizing: border-box;}
    }
  }
  &.theme--dark {
    background: $back--dark;
    color: $color--dark;
  }
}

@media screen and (max-width: 1440px) {

}

@media screen and (max-width: 1280px) {

}

</style>
