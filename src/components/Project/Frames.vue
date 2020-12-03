<template>
  <div class="col s12 m12 l12">
    <div class="frames-wraper card-wraper">
      <div class="frames-count">
        <span class="name-fields name-field ">Number of frames</span>
        <input
          class="basic-input"
          type="number"
          id="count"
          name="frames-count"
          placeholder="1"
          :value="framesCount"
          @input="updateFramesInfo"
        />
      </div>
      <div class="render-time">
        <span class="name-field">
          Average render time per frame on your PC
        </span>

        <div class="input-wraper">
          <input
            class="basic-input"
            type="number"
            id="hours"
            name="render-time-hours "
            placeholder="Hours"
            :value="hours"
            @input="updateFramesInfo"
          />

          <input
            class="basic-input"
            type="number"
            id="minutes"
            name="render-time-minutes"
            placeholder="Minutes"
            :value="minutes"
            @input="updateFramesInfo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { removeAlert } from '../../assets/scripts/removeAlert'
export default {
  name: 'Frames',
  computed: {
    ...mapState({
      framesCount: (state) => state.renderInfo.framesCount,
      hours: (state) => state.renderInfo.renderTime.hours,
      minutes: (state) => state.renderInfo.renderTime.minutes,
      framesValidate: (state) => state.validationData.frames,
    }),
  },
  methods: {
    updateFramesInfo(e) {
      // forbidden characters
      if (e.data === 'e') {
        e.target.value = this[e.target.id]
        return true
      }
      if (e.target.value === '') {
        this.$store.commit('SET_FRAMES_DATA', {
          frameInputValue: e.target.value,
          frameInputId: e.target.id,
          framesValidate: false,
        })
      } else {
        this.$store.commit('SET_FRAMES_DATA', {
          frameInputValue: e.target.value,
          frameInputId: e.target.id,
        })
        removeAlert(e.target)
      }
    },
  },
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
    .input-wraper {
      display: flex;
    }
  }
  .render-time {
    margin: 0 12%;
    .basic-input:nth-child(2) {
      margin-left: 25px;
    }
  }
  .alert-validate {
    position: relative;
    transition: 0.3s;
    border-bottom: 1px solid rgba($color: red, $alpha: 0.3);
    &::before {
      content: '* Fill in at least one field';
      position: absolute;
      bottom: -20px;
      right: 19%;
      color: red;
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
