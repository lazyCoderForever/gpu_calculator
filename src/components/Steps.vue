<template>
  <div class="steps-wraper">
    <ul class="steps">
      <li class="step step-0 line"><span class="step-value ">1</span></li>
      <li class="step step-1"><span class="step-value">2</span></li>
      <li class="step step-2 line"><span class="step-value ">3</span></li>
    </ul>
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
  .steps {
    display: flex;
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
        flex-basis: 300px;
      }
      &-1 {
        flex-basis: 100px;
      }
      &-2 {
        flex-basis: 200px;
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
</style>
