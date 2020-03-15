<template>
  <header>
    <h1>
      <router-link to='/'><img src="../assets/images/logo.svg" alt="logo"></router-link>
    </h1>
    <div id="darkBtn">
      <img src="../assets/icons/ion-ios-moon.svg" alt="darkbtn">
    </div>
    <nav id="gnb">
      <router-link to='/'>HOME</router-link>
      <router-link to='/works'>WORKS</router-link>
      <router-link to='/about'>ABOUT</router-link>
      <router-link to='/carrers'>CARRERS</router-link>
      <router-link to='/contact'>CONTACT</router-link>
      <span id="gnbLine">gnbline</span>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
window.onload = function () {
  let gnb = document.getElementById('gnb')
  let gnbLine = document.getElementById('gnbLine')
  let gnbChild = gnb.getElementsByTagName('a')
  let a = document.getElementsByTagName('a')
  let gnbChildWidth = []
  let gnbChildLeft = []
  let gnbChildOn
  function resetGnbOn () {
    for (let i = 0; i < gnbChild.length; i++) {
      gnbChild[i].removeAttribute('id')
    }
    let nowLocation = location.href
    let locationResult = nowLocation.substring(nowLocation.lastIndexOf('/') + 1)
    switch (locationResult) {
      case 'works':
        gnbChild[1].id = 'gnbOn'
        break
      case 'about':
        gnbChild[2].id = 'gnbOn'
        break
      case 'carrers':
        gnbChild[3].id = 'gnbOn'
        break
      case 'contact':
        gnbChild[4].id = 'gnbOn'
        break
      default:
        gnbChild[0].id = 'gnbOn'
    }
    console.log(nowLocation)
    gnbChildOn = document.getElementById('gnbOn')
    gnbLine.style.width = gnbChildOn.offsetWidth + 'px'
    gnbLine.style.left = gnbChildOn.offsetLeft + 'px'
  }
  resetGnbOn()
  for (let i = 0; i < gnbChild.length; i++) {
    gnbChildWidth[i] = gnbChild[i].offsetWidth
    gnbChildLeft[i] = gnbChild[i].offsetLeft
    gnbChild[i].addEventListener('mouseover', function () {
      gnbLine.style.width = gnbChildWidth[i] + 'px'
      gnbLine.style.left = gnbChildLeft[i] + 'px'
    }, false)
    gnbChild[i].addEventListener('mouseleave', resetGnbOn)
  }
  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', resetGnbOn)
  }
}
</script>

<style scoped lang="scss">
  header {padding-top: 75px; display: flex; justify-content: space-between; align-items: center; position: relative;
    #darkBtn {width: 26px; position: absolute; top: -25px; left: 0; right: 0; margin: 0 auto; cursor: pointer; transition: .5s top ease;
      &::before {content: ''; display: block; width: 1px; height: 100px; background-color: #000000; margin: 0 auto;}
      &:hover {top: 0;}
      &:active {transition: 0s; top: -25px;}
      img {width: 100%; margin-top: -25px;}
    }
    #gnb {display: flex; position: relative;
      #gnbLine {display: block; position: absolute; bottom: 0; height: 1px; bottom: -2px; background: #000; text-indent: -9999px; transition-property: width, left; transition-duration: 1s, 1s; transition-timing-function: ease-out, cubic-bezier(.82, .1, .14, 1.12);}
      a {display: block; margin-right: 25px;
        &:last-child {margin-right: 0;}
      }
    }
  }
</style>
