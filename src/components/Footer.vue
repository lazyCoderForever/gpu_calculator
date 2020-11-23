<template>
  <div class="col s12 m12 l12 footer-wraper">
    <div class="row">
      <div class="footer">
        <span class="footer-copyright">Copyright © 2016-2020. AnimaRender</span>
        <nav class="footer-nav">
          <ul class="footer-nav-list">
            <li class="footer-nav-list_item">
              <a href="#">Help</a>
            </li>
            <li class="footer-nav-list_item">
              <a href="#">Software</a>
            </li>
            <li class="footer-nav-list_item">
              <a href="#">Referral program</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.row {
  margin: 0 auto;
}
.footer-wraper {
  padding: 0 20px 0 90px;
  margin: 30px auto;
  background: rgba(72, 100, 230, 0.1);
  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0px 50px 0px 90px;
    &-copyright {
      flex-basis: 266px;
      margin: 20px auto 0px;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
    }
    &-nav {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      background-color: transparent;
      border: none;
      box-shadow: none;
      &-list {
        display: flex;
        justify-content: space-between;

        &_item {
          margin: 20px auto 0px;
          a {
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 15px;
            color: $footer_color;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 599px) {
  .footer-wraper {
    margin: 0 auto;
    .footer {
      padding: 0 25px;
      &-copyright {
        margin: 20px auto;
      }
      &-nav {
        justify-content: center;
        height: auto;
        &-list {
          &_item {
            margin: 0 auto;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 320px) {
  .footer-wraper {
    margin: 0 auto;
    .footer {
      flex-direction: column-reverse;
      padding: 0;
      &-copyright {
        flex-basis: initial;
        width: 100%;
        margin: 10px auto 0 auto;
        padding: 20px 0;
        background: #e0e0e0;
        color: $grey;
        text-align: center;
      }
      &-nav {
        justify-content: center;
        height: auto;
        &-list {
          flex-direction: column;
          align-items: center;
          &_item {
            margin: 18px auto 0;
          }
        }
      }
    }
  }
}
</style>
