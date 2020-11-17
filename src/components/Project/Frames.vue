<template>
  <div class="col s12 m12 l12">
    <div class="frames-wraper card-wraper">
      <div class="frames-count">
        <span class="name-fields name-field ">Number of frames</span>
        <input
          class="basic-input"
          type="text"
          name="frames-count"
          placeholder="1"
        />
      </div>
      <div class="render-time">
        <span class="name-field">
          Average render time per frame on your PC
        </span>

        <div class="input-wraper">
          <input
            class="basic-input"
            type="text"
            name="render-time-hours "
            placeholder="Hours"
          />

          <input
            class="basic-input"
            type="text"
            name="render-time-minutes "
            placeholder="Minutes"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Frames',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.frames-wraper {
  display: flex;

  border-radius: 4px;

  .frames-count,
  .render-time {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .render-time {
    margin: 0 12%;
    .basic-input:nth-child(2) {
      margin-left: 25px;
    }
  }
  .name-field {
    margin-bottom: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;

    color: $card_main_color;
  }
}

@media screen and (max-width: 1244px) {
  .frames-wraper {
    .render-time {
      margin: 0 3%;
    }
  }
}
@media screen and (max-width: 476px) {
  .frames-wraper {
    flex-direction: column;
    align-items: center;
    .render-time {
      .basic-input:nth-child(2) {
        margin-left: 0;
      }
      .input-wraper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
      }
    }
  }
}
</style>
