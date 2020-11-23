<template>
  <div class="alert-wraper ">
    <img
      src="../../assets/img/alert-icon.svg"
      alt="alert-icon"
      class="alert-img"
    />
    <p class="alert-text">
      This estimation is approximate. It is based only on comparison of capacity
      between your PC and our servers. Try a free test to get more accurate
      estimation.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AlertCard',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.alert-wraper {
  display: flex;
  align-items: center;
  .alert-text {
    max-width: 753px;
    margin: 0 17px;
    color: #ff5f74;
    font-family: $second_font;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
  }
  .alert-img {
    display: block;
    width: 30px;
    height: 24px;
  }
}

@media screen and (max-width: 320px) {
  .alert-wraper {
    align-items: flex-start;
    .alert-text {
      font-size: 12px;
      line-height: 15px;
    }
  }
}
</style>
