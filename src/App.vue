<template>
  <div id="app" class="container">
    <Header />
    <div class="row">
      <SidebarMenu />
      <Steps />
      <PrMain />
    </div>
  </div>
</template>

<script>
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
  margin: 5px auto;
  padding: 15px 20px;
  background-color: $card_background;
}

/*
---------------------------           MEDIA QUARES            ----------------------------------------
*/

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
    margin: 0 auto;
    background-color: #ffffff;
  }
}
</style>
