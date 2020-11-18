<template>
  <div class="col s12 m12 l12">
    <div class="calculated-data-wtaper card-wraper">
      <AlertCard />
      <div class="calculated-data">
        <label for="render-time" class="calculated-data_field">
          <span>Render time</span>
          <input
            type="text"
            placeholder="0.25 server/hr or 0.25 hr on 1 server"
            name="render-time"
            class="calculated-data_field-input"
          />
        </label>
        <label for="price" class="calculated-data_field">
          <span>Price</span>
          <input
            type="text"
            placeholder="0.31 AP"
            name="price"
            class="calculated-data_field-input"
          />
          <span class="warning-mark"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import AlertCard from './AlertCard.vue'
export default {
  name: 'CalculatedData',
  components: {
    AlertCard,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.calculated-data-wtaper {
  .calculated-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 75px auto 20px;
    .calculated-data_field {
      position: relative;
      display: flex;
      align-items: center;
      width: 70%;
      margin: 5px auto 5px 0;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      color: $blue;
      &-input {
        max-width: 336px;
        width: 100%;
        height: 45px;
        margin: 0 0 0 auto;
        background-color: #ffffff;
        border: 1px solid #dfe2e6;
        box-sizing: border-box;
        border-radius: 4px;
        &:focus {
          border: 1px solid #dfe2e6;
        }
      }
      .warning-mark {
        position: absolute;
        right: 0%;
        width: 15px;
        height: 15px;
        background-image: url('../../assets/img/warning-icon.svg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transform: translateX(30px);
      }
    }
  }
}
</style>
