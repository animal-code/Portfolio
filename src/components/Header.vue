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
    <div id="menuBtn">
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
    <nav id="subMenu">
      <div class="menu-wrapper display-4 font-light">
        <router-link to='/'>HOME</router-link>
        <router-link to='/works'>WORKS</router-link>
        <router-link to='/about'>ABOUT</router-link>
        <router-link to='/carrers'>CARRERS</router-link>
        <router-link to='/contact'>CONTACT</router-link>
        <div class="social">
          <a href="http://github.com/kingsky32"><i class="fab fa-github"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100004252961772"><i class="fab fa-facebook"></i></a>
          <a href=""><i class="fab fa-google"></i></a>
          <a href="https://www.instagram.com/kingsky32"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
window.onload = function () {
  // Darkmode Btn Variable
  const gnb = document.getElementById('gnb')
  const gnbLine = document.getElementById('gnbLine')
  const gnbChild = gnb.getElementsByTagName('a')
  const a = document.getElementsByTagName('a')
  let gnbChildWidth = []
  let gnbChildLeft = []
  let gnbChildOn
  const darkBtn = document.getElementById('darkBtn')
  const wrapper = document.body
  let darkToggle = false

  const _menuBtn = document.getElementById('menuBtn')

  _menuBtn.addEventListener('click', () => {
    _menuBtn.classList.toggle('on')
    document.getElementById('subMenu').classList.toggle('on')
  })

  function darkFn () {
    if (darkToggle) {
      wrapper.classList.add('theme--dark')
      wrapper.classList.remove('theme--light')
    } else {
      wrapper.classList.add('theme--light')
      wrapper.classList.remove('theme--dark')
    }
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
  resetGnbOn()
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/app';
  body {
    #app {
      header {padding: 75px 60px 0; display: flex; justify-content: space-between; align-items: center; position: fixed; width: 100%; transition-property: padding; @include ease-out(.5s); z-index: 100; top: 0; box-sizing: border-box;
        h1 {position: relative; z-index: 3;}
        #darkBtn {width: 26px; position: absolute; top: -25px; left: 0; right: 0; margin: 0 auto; cursor: pointer; transition: .5s top ease; z-index: 3;
          &::before {content: ''; display: block; width: 1px; height: 85px; background-color: $color--light; margin: 0 auto;}
          &:hover {top: 0;}
          &:active {transition: 0s; top: -25px;}
          i {font-size: 26px; display: block;}
        }
        #gnb {display: flex; position: relative; z-index: 3;
          #gnbLine {display: block; position: absolute; bottom: 0; height: 1px; bottom: -2px; background: $color--light; text-indent: -9999px; transition-property: width, left; @include ease-out(1s);}
          a {display: block; margin-right: 25px;
            &:last-child {margin-right: 0;}
          }
        }
        #menuBtn {width: 25px; z-index: 3; display: none; cursor: pointer; @include ease-out(.25s);
          span {width: 25px; height: 4px; background-color: $color--main; display: block; text-indent: -9999px; margin: 5px auto; transition-property: all; @include ease-out(.25s);}
          &:hover {transform: rotate(15deg);}
          &:active {transform: rotate(35deg);}
          &.on {transform: rotate(360deg); transition-delay: .15s;
            &:hover {transform: rotate(375deg); transition-delay: 0s;}
            span {
              &:nth-child(1) {margin-bottom: -9px; transform: rotate(45deg);}
              &:nth-child(2) {transform: rotate(45deg);}
              &:nth-child(3) {margin-top: -9px; transform: rotate(-45deg);}
            }
          }
        }
        #subMenu {width: 100vw; height: 100vh; position: fixed; background: $back--light; top: 0; left: 0; z-index: 2; display: none;
          .menu-wrapper {display: flex; flex-flow: column nowrap; align-items: center; justify-content: center; height: 100%;
            > a {margin-bottom: 50px;
              &:last-of-type {margin-bottom: 0;}
              &:hover {color: $color--main;}
              &.router-link-exact-active {color: $color--main}
            }
            .social {position: absolute; bottom: 0;}
          }
          &.on {display: block}
        }
      }
    }
    &.theme--dark {
      #app {
        header {
          #darkBtn {
            &::before {background: $color--dark;}
          }
        }
        #gnb {
          #gnbLine {background: $color--dark;}
        }
        #subMenu {background: $back--dark;

        }
      }
    }
  }

  @media screen and (max-width: 1440px) {
    body {
      #app {
        header {padding: 75px 25px;}
      }
    }
  }
  @media screen and (max-width: 1280px) {
    body {
      #app {
        #contents-wrap {
          .contents {
            max-width: auto;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    body {
      #app {
        header {
          #gnb {display: none;}
          #menuBtn {display: block;}
        }
      }
    }
  }
  @media screen and (max-width: 768px) {

  }
  @media screen and (max-width: 425px) {

  }
</style>
