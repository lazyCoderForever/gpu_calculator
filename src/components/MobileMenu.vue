<template>
  <div class="mobile-menu-wraper">
    <div class="mobile-menu">
      <ul class="mobile-menu_list">
        <div class="user-data-mobile">
          <span class="user-data-mobile_avatar">
            <img src="../assets/img/avatar.png" alt="avatar" />
          </span>
          <span class="user-data-mobile_mail">a.nikitina@animarender.com</span>
          <div class="user-data-mobile_exite"></div>
        </div>
        <ul class="mobile-menu_list-nav">
          <li class="mobile-menu_list-nav-item">
            <a href="#" class="mobile-menu_list-nav-item_link">
              <span class="mobile-icon mobile-icon-0">Mobile link 1</span>
            </a>
          </li>
          <li class="mobile-menu_list-nav-item">
            <a href="#" class="mobile-menu_list-nav-item_link">
              <span class="mobile-icon mobile-icon-1">Mobile link 2</span>
            </a>
          </li>
          <li class="mobile-menu_list-nav-item">
            <a href="#" class="mobile-menu_list-nav-item_link">
              <span class="mobile-icon mobile-icon-2">Mobile link 3</span>
            </a>
          </li>
          <li class="mobile-menu_list-nav-item">
            <a href="#" class="mobile-menu_list-nav-item_link">
              <span class="mobile-icon mobile-icon-3">Mobile link 4</span>
            </a>
          </li>
          <li class="mobile-menu_list-nav-item">
            <a href="#" class="mobile-menu_list-nav-item_link">
              <span class="mobile-icon mobile-icon-4">Mobile link 5</span>
            </a>
          </li>
          <li class="mobile-menu_list-nav-item">
            <a href="#" class="mobile-menu_list-nav-item_link">
              <span class="mobile-icon mobile-icon-5">Mobile link 6</span>
            </a>
          </li>
          <li class="mobile-menu_list-nav-item">
            <a href="#" class="mobile-menu_list-nav-item_link">
              <span class="mobile-icon mobile-icon-6">Mobile link 7</span>
            </a>
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mobile-menu-wraper {
  position: absolute;
  top: 0;
  right: 0;
  width: 0vw;
  height: 100vh;
  background-color: #ffffff;
  transition: 0.4s;
  opacity: 0;
  .mobile-menu {
    margin: 0 auto 15px;
    &_list {
      position: relative;
      top: 60px;
      &-nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        &_link {
          padding: 20px 0;
        }
      }
      .user-data-mobile {
        display: flex;
        height: 75px;
        align-content: center;
        justify-content: flex-start;
        padding: 0 20px;
        &_avatar {
          display: flex;
          height: 100%;
          align-items: center;
        }
        &_mail {
          display: flex;
          height: 100%;
          align-items: center;
          margin: 0 20px;
          color: $blue;
        }
        &_exite {
          display: block;
          width: 40px;
          height: 100%;
          margin-right: 0;
          background-image: url('../assets/img/exite.svg');
          background-position: center center;
          background-size: auto;
          background-repeat: no-repeat;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
