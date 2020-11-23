<template>
  <div id="app" class="container">
    <Header />
    <div class="row">
      <SidebarMenu />
      <Steps />
      <PrMain />
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import PrMain from './components/Project/PrMain.vue'
import SidebarMenu from './components/SidebarMenu.vue'
import Steps from './components/Steps'

export default {
  name: 'App',
  components: {
    Header,
    SidebarMenu,
    Steps,
    PrMain,
    Footer,
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
.container {
  overflow: hidden;
}
.fluid-col {
  height: 100%;
}

/* 
-------------------- INPUT,SELECT --------------------
*/
select:focus {
  outline: 1px solid $blue;
}
.basic-input,
input[type='text']:not(.browser-default),
select {
  max-width: 156px;
  width: 100%;
  max-height: 45px;
  height: 100%;
  padding: 12px 12px;
  background-color: #ffffff;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
}
.basic-input::placeholder {
  color: $input_text_color;
}
input[type='text']:not(.browser-default):focus:not([readonly]) {
  border: none;
  box-shadow: 0 1px 0 0 $blue;
}

/* 
--------------------  --------------------
*/

.global-h3 {
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
}

.card-wraper {
  position: relative;
  margin: 5px auto;
  padding: 15px 20px;
  background-color: $card_background;
  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 10px;
    width: 0;
    height: 0;
    border-top: 23px solid transparent;
    border-bottom: 23px solid transparent;

    border-right: 23px solid $card_background;
  }
}

/*
---------------------------           MEDIA QUARES            ----------------------------------------
*/
@media screen and (max-width: 1400px) {
  .container {
    max-width: 100%;
    width: 100%;
    overflow: hidden;
  }
}

@media screen and (max-width: 1244px) {
  .basic-input,
  input[type='text']:not(.browser-default) {
    max-width: 120px;
  }
}
@media (min-width: 600px) and (max-width: 921px) {
  .container {
    max-width: 100%;
    width: 100%;
  }
  .row .col {
    padding: 0.2rem;
  }
}

@media screen and (max-width: 599px) {
  .container {
    max-width: 100%;
    width: 100%;
  }
  .card-wraper {
    margin: 0 20px;
    background-color: #ffffff;
  }
}

@media screen and (max-width: 476px) {
  .basic-input,
  input[type='text']:not(.browser-default) {
    margin: 8px auto;
  }
  .global-h3 {
    text-align: center;
    font-weight: 600;
  }
  .card-wraper {
    margin: 0 15px;
  }
}

@media screen and (max-width: 320px) {
  .basic-input,
  input[type='text']:not(.browser-default) {
    max-width: 140px;
  }
}
</style>
