<template>
  <div id="app" class="container">
    <Header />
    <div class="row">
      <SidebarMenu />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import SidebarMenu from './components/SidebarMenu.vue'
import Steps from './components/Steps.vue'

export default {
  name: 'App',
  components: {
    Header,
    SidebarMenu,
    Steps,
  },
}
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import './assets/scss/reset.scss';
@font-face {
  font-family: 'GoogleSans';
  src: url('./assets/fonts/GoogleSans-Regular.eot');
  src: url('./assets/fonts/GoogleSans-Regular.woff2') format('woff2'),
    url('./assets/fonts/GoogleSans-Regular.woff') format('woff'),
    url('./assets/fonts/GoogleSans-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Poppins';
  src: url('./assets/fonts/Poppins-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: $main_font;
}

.fluid-col {
  height: 100%;
}

@media screen and (max-width: 599px) {
  .container {
    max-width: 100%;
    width: 100%;
  }
}
</style>
