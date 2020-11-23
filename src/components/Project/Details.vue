<template>
  <div class="col s12 m12 l12">
    <div class="details-wraper card-wraper">
      <h3 class="details-h3 global-h3">Specify your project details</h3>
      <div class="details">
        <label for="animation-detail" class="detail">
          Animation
          <input type="checkbox" name="animation" id="animation-detail" />
          <div class="checkmark"></div>
        </label>
        <label for="still-detail" class="detail ">
          Still
          <input type="checkbox" name="still" id="still-detail" />
          <div class="checkmark"></div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.details-wraper {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  border-radius: 4px;
  .details {
    display: flex;
    margin: 10px 0;
    font-size: 16px;

    .detail {
      position: relative;
      margin: 20px 0;
      color: $card_main_color;
      input:checked ~ .checkmark:after {
        display: block;
      }
      &:nth-child(even) {
        margin: 20px 125px;
      }
      .checkmark {
        position: absolute;
        bottom: 0;
        right: -25px;
        background-color: #ffffff;
        width: 18px;
        height: 18px;
        border-radius: 10px;
        border: 2px solid rgba(28, 92, 237, 0.1);
        box-sizing: border-box;
        transition: 0.2s;
        &:after {
          content: '';
          display: none;
          width: 90%;
          height: 90%;
          background-color: $blue;
          border-radius: 14px;
        }
      }
    }
  }
}
@media screen and (max-width: 476px) {
  .details-wraper {
    position: relative;
    .details-h3 {
      margin: 10px auto;
    }
    .details {
      max-width: 50%;
      flex-direction: column;
      align-items: flex-end;
      margin: 0 50% 0 auto;
      .detail {
        margin: 8px 0;
        &:nth-child(even) {
          margin: 8px 0;
        }
      }
    }
    &::after {
      content: '';
      position: absolute;
      width: 60%;
      margin-left: -30%;
      left: 50%;
      height: 1px;
      bottom: 0;
      background: rgba(28, 92, 237, 0.1);
    }
  }
}
</style>
