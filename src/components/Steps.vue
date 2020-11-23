<template>
  <div class="col m1 l1 hide-on-small-only">
    <div class="steps-wraper">
      <ul class="steps">
        <li class="step step-0 line"><span class="step-value ">1</span></li>
        <li class="step step-1"><span class="step-value">2</span></li>
        <li class="step step-2 line"><span class="step-value ">3</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Steps',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.steps-wraper {
  display: flex;
  flex-direction: column;
  align-items: center;
  .steps {
    display: flex;
    flex-basis: 638px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .line {
      position: relative;
      &:first-child:after {
        bottom: -16%;
        top: auto;
      }
      &:after {
        content: '';
        position: absolute;
        top: -25%;
        width: 2px;
        height: 69%;
        background-color: $blue;
        z-index: -1;
      }
    }
    .step {
      display: flex;
      justify-content: center;
      align-items: center;
      &-0 {
        padding: 95px 0;
      }
      &-2 {
        padding: 70px 0;
      }
      &-value {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        margin: 25% 10px;
        color: #ffffff;
        background-color: $blue;
        border-radius: 15px;
      }
    }
  }
}
/*
---------------------------           MEDIA QUARES            ----------------------------------------
*/

@media screen and (max-width: 921px) {
  .steps-wraper {
    .steps {
      flex-basis: 675px;
      .step {
        &-0 {
          padding: 95px 0;
        }
        &-2 {
          padding: 70px 0;
        }
      }
    }
  }
}
</style>
