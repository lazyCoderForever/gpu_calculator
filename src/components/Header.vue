<template>
  <div class="header-wraper">
    <header class="row ">
      <div class="col s8 m9 l8 fluid-col  valign-wrapper ">
        <div class="col s4 m1 l1 valign-wrapper">
          <a href="#" class="logo-icon">
            <img src="../assets/img/logo.png" alt="Logo" />
          </a>
        </div>
        <div class="col m9 l9 hide-on-small-only">
          <div class="user-data">
            <span class="user-data_avatar">
              <img src="../assets/img/avatar.png" alt="avatar" />
            </span>
            <span class="user-data_mail">a.nikitina@animarender.com</span>
          </div>
        </div>
        <div class="col s8 m2 l2 valign-wrapper right-align">
          <span class="AP">741.19 AP </span>
        </div>
      </div>
      <div class="col s4 m3 l3 push-l1 options">
        <div class="option notification"></div>
        <div class="burger-menu-wraper ">
          <input
            type="checkbox"
            name="open-mobile-menu"
            id="open-mobile-menu"
          />
          <label for="open-mobile-menu" class="burger-menu"> </label>
          <MobileMenu />
        </div>
        <div class="option lang  hide-on-small-only"></div>
        <div class="option exite  hide-on-small-only"></div>
      </div>
    </header>
  </div>
</template>

<script>
import MobileMenu from './MobileMenu.vue'

export default {
  name: 'Header',
  components: {
    MobileMenu,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.row {
  height: 100%;
  margin-bottom: 0;
}

.header-wraper {
  position: relative;
  height: 70px;
  background-color: #ffffff;
  box-shadow: 10px 0px 50px rgba(0, 0, 0, 0.05);
  font-size: 16px;

  .AP {
    color: $input_text_color;
  }
  .options {
    display: flex;
    height: 100%;

    .option {
      position: relative;
      width: 100px;
      height: 100%;
      background-position: center center;
      background-size: auto;
      background-repeat: no-repeat;
      cursor: pointer;
      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 1px;
        height: 100%;
        background-color: $main_background;
      }
    }
    .notification {
      background-image: url('../assets/img/Notifications.svg');
    }
    .lang {
      background-image: url('../assets/img/Flag.svg');
      &:after {
        content: '';
        position: absolute;
        top: 45%;
        right: 7px;
        width: 8px;
        height: 5px;
        background-image: url('../assets/img/arrow.svg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }
    }
    .exite {
      background-image: url('../assets/img/exite.svg');
    }
  }

  .user-data {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;
    color: $blue;
    &_avatar {
      display: block;
      max-width: 36px;
      max-height: 36px;
      margin: 0 20px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }

  .logo-icon {
    display: block;
    max-width: 30px;
    max-height: 30px;
    margin: 0px auto;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .burger-menu-wraper {
    display: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    #open-mobile-menu:checked {
      & ~ .mobile-menu-wraper {
        width: 100vw;
        opacity: 1;
        z-index: 500;
      }
      & ~ .burger-menu {
        background-color: transparent;
        &::after {
          transform: rotate(45deg) translateY(-1px) translateX(-1px);
        }
        &::before {
          transform: rotate(-45deg);
        }
      }
    }
    .burger-menu {
      max-width: 18px;
      width: 100%;
      height: 2px;
      background-color: $blue;
      z-index: 600;
      &:after,
      &:before {
        content: '';
        display: block;
        width: 18px;
        height: 2px;
        background-color: $blue;
        transition: 0.3s;
      }
      &:after {
        transform: translateY(3px);
      }
      &:before {
        transform: translateY(-5px);
      }
    }
  }
}

@media (min-width: 600px) and (max-width: 900px) {
  .header-wraper {
    .options {
      .lang {
        &:after {
          display: none;
        }
      }
    }
  }
}

@media screen and (max-width: 599px) {
  .header-wraper {
    .col {
      height: 100%;
    }
    .options {
      .option {
        &:before {
          display: none;
        }
      }
      .notification {
        background-position: center 10px;
      }
    }
    .AP {
      width: 100%;
      font-size: 15px;
      color: $blue;
    }
    .logo-icon {
      max-width: 16px;
      max-height: 16px;
    }
    .burger-menu-wraper {
      display: flex;
    }
  }
}
</style>
