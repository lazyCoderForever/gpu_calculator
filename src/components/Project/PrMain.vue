<template>
  <div class="col s12 m10 l10 main-frame">
    <div class="row">
      <Render />
      <Details />
      <Frames />
      <PcSettings />
      <CalculatedData />
    </div>
  </div>
</template>

<script>
import CalculatedData from './CalculatedData.vue'
import Details from './Details.vue'
import Frames from './Frames.vue'
import PcSettings from './PcSettings.vue'
import Render from './Render.vue'
export default {
  name: 'PrMain',
  components: {
    Render,
    Details,
    Frames,
    PcSettings,
    CalculatedData,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (max-width: 476px) {
  .main-frame {
    background-color: $mobile_background_color;
  }
}
</style>
