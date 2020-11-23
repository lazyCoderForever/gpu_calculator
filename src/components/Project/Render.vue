<template>
  <div class="col s12 m12 l12">
    <div class="render-wraper card-wraper">
      <h3 class="render-h3 global-h3">Your render</h3>
      <div class="render-img">
        <img src="../../assets/img/render.png" alt="render image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Render',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.render-wraper {
  border-radius: 4px;
  margin: 25px auto 0px;
  .render-img {
    display: inline-block;
    width: 100%;
    text-align: center;
    margin: 20px auto;
  }
  .render-h3 {
    display: inline-block;
    width: 100%;
    color: $capital_color;
  }
}

@media screen and (max-width: 476px) {
  .render-wraper {
    border-radius: 4px;
    margin: 16px 15px 0px;
  }
}
</style>
