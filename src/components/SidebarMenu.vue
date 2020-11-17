<template>
  <aside class="col m1 l1 hide-on-small-only">
    <div class="sidebar-wraper">
      <ul class="sidebar-menu_list">
        <li class="sibebar-menu_list-item">
          <a href="#" class="sibebar-menu_list-item_link">
            <span class="sidebar-icon sidebar-icon-0"></span>
          </a>
        </li>
        <li class="sibebar-menu_list-item">
          <a href="#" class="sibebar-menu_list-item_link">
            <span class="sidebar-icon sidebar-icon-1"></span>
          </a>
        </li>
        <li class="sibebar-menu_list-item">
          <a href="#" class="sibebar-menu_list-item_link">
            <span class="sidebar-icon sidebar-icon-2"></span>
          </a>
        </li>
        <li class="sibebar-menu_list-item">
          <a href="#" class="sibebar-menu_list-item_link">
            <span class="sidebar-icon sidebar-icon-3"></span>
          </a>
        </li>
        <li class="sibebar-menu_list-item">
          <a href="#" class="sibebar-menu_list-item_link">
            <span class="sidebar-icon sidebar-icon-4"></span>
          </a>
        </li>
        <li class="sibebar-menu_list-item">
          <a href="#" class="sibebar-menu_list-item_link">
            <span class="sidebar-icon sidebar-icon-5"></span>
          </a>
        </li>
        <li class="sibebar-menu_list-item">
          <a href="#" class="sibebar-menu_list-item_link">
            <span class="sidebar-icon sidebar-icon-6"></span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SidebarMenu',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar-wraper {
  max-width: 100px;
  width: 100%;
  margin-top: 2px;
  background-color: #ffffff;
  .sibebar-menu_list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-item {
      display: block;
      width: 100%;
      height: 60px;
      &_link {
        display: block;
        width: 100%;
        height: 100%;
        .sidebar-icon {
          display: block;
          width: 100%;
          height: 100%;
          filter: grayscale(90%) opacity(70%) brightness(1);
          background-size: 20px;
          background-repeat: no-repeat;
          background-position: center center;
          transition: 0.2s;
          &:hover {
            box-shadow: -14px 1px 0px -11px rgba(82, 106, 229, 1) inset;
            filter: grayscale(0) opacity(1) brightness(1);
            background-color: $sidebar_background_hover;
          }

          &-0 {
            background-image: url('../assets/img/rocket.svg');
          }
          &-1 {
            background-image: url('../assets/img/picture.svg');
          }
          &-2 {
            background-image: url('../assets/img/notes.svg');
          }
          &-3 {
            background-image: url('../assets/img/wallet.svg');
          }
          &-4 {
            background-image: url('../assets/img/calculator.svg');
          }
          &-5 {
            background-image: url('../assets/img/gear.svg');
          }
          &-6 {
            background-image: url('../assets/img/layers.svg');
          }
        }
      }
    }
  }
}
</style>
