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
  const gnb = document.getElementById('gnb')
  const gnbLine = document.getElementById('gnbLine')
  const gnbChild = gnb.getElementsByTagName('a')
  const a = document.getElementsByTagName('a')
  let gnbChildWidth = []
  let gnbChildLeft = []
  let gnbChildOn
  const darkBtn = document.getElementById('darkBtn')
  const wrapper = document.getElementById('app')
  let darkToggle = false
  function darkFn () {
    darkToggle = !darkToggle
    if (darkToggle) {
      wrapper.classList.add('theme--dark')
      wrapper.classList.remove('theme--light')
      return false
    }
    wrapper.classList.add('theme--light')
    wrapper.classList.remove('theme--dark')
  }
  darkBtn.addEventListener('click', darkFn)
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
    gnbChildOn = document.getElementById('gnbOn')
    gnbLine.style.width = gnbChildOn.offsetWidth + 'px'
    gnbLine.style.left = gnbChildOn.offsetLeft + 'px'
  }
  resetGnbOn()
  for (let i = 0; i < gnbChild.length; i++) {
    gnbChildWidth[i] = gnbChild[i].offsetWidth
    gnbChildLeft[i] = gnbChild[i].offsetLeft
    gnbChild[i].addEventListener('mouseover', () => {
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
  @import '../assets/scss/layout/header';
</style>
