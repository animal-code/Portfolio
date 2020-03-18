<template>
    <footer>
      <h1>
        <router-link to='/'><img src="../assets/images/logo.svg" alt="logo"></router-link>
      </h1>
      <div class="social">
        <a href="http://github.com/kingsky32"><i class="fab fa-github"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100004252961772"><i class="fab fa-facebook"></i></a>
        <a href=""><i class="fab fa-google"></i></a>
        <a href="https://www.instagram.com/kingsky32"><i class="fab fa-instagram"></i></a>
      </div>
      <p class="copy">&copy; All Rights Reserved.</p>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/app';
  body {
    #app {
      footer {display: flex; align-items: center; flex-flow: column nowrap; justify-content: center; border-top: 1px solid #ccc; padding: 35px 0; margin-top: 150px;
        h1 {width: 160px; margin-bottom: 15px;
          img {width: 1005;}
        }
        .social {margin-bottom: 35px; display: flex; flex-flow: row nowrap;
          a {margin-right: 30px;
            i {font-size: 28px; color: $color--main;}
            &:last-child {margin-right: 0;}
          }
        }
        .copy {font-size: 21px; font-weight: 300; color: $color--light;}
      }
    }
  &.theme--dark {
    #app {
      footer {
        .social {
            a {color: $color--dark;}
          }
          .copy {color: $color--dark;}
        }
      }
    }
  }

</style>
