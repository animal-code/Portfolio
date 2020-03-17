<template>
  <header>
    <h1>
      <router-link to='/'><img src="../assets/images/logo.svg" alt="logo"></router-link>
    </h1>
    <div id="darkBtn">
      <i class="fas fa-moon"></i>
    </div>
    <nav id="gnb" class="text-normal font-medium">
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
    if (darkToggle) {
      wrapper.classList.add('theme--dark')
      wrapper.classList.remove('theme--light')
      return false
    }
    wrapper.classList.add('theme--light')
    wrapper.classList.remove('theme--dark')
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkToggle = true
    darkFn()
  } else {
    darkToggle = false
    darkFn()
  }
  darkBtn.addEventListener('click', () => {
    darkToggle = !darkToggle
    darkFn()
  })
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
  @import '../assets/scss/app';
  #app {
    header {padding: 75px 60px 0; display: flex; justify-content: space-between; align-items: center; position: relative;
      #darkBtn {width: 26px; position: absolute; top: -25px; left: 0; right: 0; margin: 0 auto; cursor: pointer; transition: .5s top ease;
        &::before {content: ''; display: block; width: 1px; height: 85px; background-color: $color--light; margin: 0 auto;}
        &:hover {top: 0;}
        &:active {transition: 0s; top: -25px;}
        i {font-size: 26px; display: block;}
      }
      #gnb {display: flex; position: relative;
        #gnbLine {display: block; position: absolute; bottom: 0; height: 1px; bottom: -2px; background: $color--light; text-indent: -9999px; transition-property: width, left; @include ease-out(1s);}
        a {display: block; margin-right: 25px;
          &:last-child {margin-right: 0;}
        }
      }
    }
    &.theme--dark {
      header {
        #darkBtn {
          &::before {background: $color--dark;}
        }
      }
      #gnb {
        #gnbLine {background: $color--dark;}
      }
    }
  }
</style>
