<template>
  <aside class="col m1 l1">
    <div class="sidebar-wraper">
      <ul class="sidebar-menu_list">
        <li class="sibebar-menu_list-link">
          <a href="#" class="sidebar-icon-0"></a>
        </li>
        <li class="sibebar-menu_list-link">
          <a href="#" class="sidebar-icon-1"></a>
        </li>
        <li class="sibebar-menu_list-link">
          <a href="#" class="sidebar-icon-2"></a>
        </li>
        <li class="sibebar-menu_list-link">
          <a href="#" class="sidebar-icon-3"></a>
        </li>
        <li class="sibebar-menu_list-link">
          <a href="#" class="sidebar-icon-4"></a>
        </li>
        <li class="sibebar-menu_list-link">
          <a href="#" class="sidebar-icon-5"></a>
        </li>
        <li class="sibebar-menu_list-link">
          <a href="#" class="sidebar-icon-6"></a>
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
  background-color: #ffffff;
  .sibebar-menu_list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    %sidebar-icon {
      background-position: center center;
      background-repeat: no-repeat;
      background-size: initial;
    }
    @for $i from 0 through 6 {
      .sidebar-icon-#{$i} {
        @extend %sidebar-icon;
        $length: -31px * $i;
        background-image: url();
      }
    }
    &-link {
      display: block;
      width: 100%;
      height: 60px;
      a {
        display: block;
        width: 100%;
        height: 100%;
        background: gray;
      }
    }
  }
}
</style>
