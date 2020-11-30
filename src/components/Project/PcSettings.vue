<template>
  <div class="col s12 m12 l12">
    <div class="gpu-settings-wraper card-wraper">
      <h3 class="gpu-h3 gpu-h3-main global-h3">Your PC</h3>
      <div class="gpu-card-wraper">
        <div
          v-for="(card, index) in this.gpuCards"
          :key="card._id"
          :id="card._id"
          class="gpu-card"
        >
          <h3 v-if="index === 0" class="gpu-h3 gpu-h3-mobile global-h3">
            Chose Your PC specs
          </h3>
          <button class="gpu-card-delete_mobile" @click="deleteCard">
            <span class="cross"></span>
          </button>
          <div class="gpu-inputS-wraper">
            <div class="gpu-wraper">
              <span class="gpu-input-title">Graphics card</span>
              <select
                name="type-card"
                class="basic-input gpu-input"
                data-key="card"
                @change="changeCardData"
              >
                <option
                  v-for="(value, name) in gpuData.list"
                  v-bind:key="name"
                  :value="name"
                  >{{ name }}</option
                >
              </select>
              <span class="arrow"></span>
            </div>
            <div class="gpu-wraper">
              <span class="gpu-input-title">Graphics card line</span>
              <select
                name="type-card"
                class="basic-input gpu-input"
                data-key="line"
                @change="changeCardData"
              >
                <option
                  v-for="(value, name) in gpuData.list[card.graphicsCard]"
                  v-bind:key="name"
                  :value="name"
                  >{{ name }}</option
                >
              </select>
              <span class="arrow"></span>
            </div>
            <div class="gpu-wraper">
              <span class="gpu-input-title">Graphics card model</span>
              <select
                name="type-card"
                class="basic-input gpu-input"
                data-key="model"
                @change="changeCardData"
              >
                <option
                  v-for="value in gpuData.list[card.graphicsCard][
                    card.graphicsCardline
                  ]"
                  v-bind:key="value"
                  :value="value"
                  >{{ value }}</option
                >
              </select>
              <span class="arrow"></span>
            </div>
            <div class="gpu-wraper">
              <span class="gpu-input-title">Number of cards</span>
              <select
                name="type-card"
                class="basic-input gpu-input"
                data-key="number"
                @change="changeCardData"
              >
                <option v-for="value in 10" v-bind:key="value" :value="value">{{
                  value
                }}</option>
              </select>
              <span class="arrow"></span>
            </div>
            <button class="gpu-card-delete" @click="deleteCard">
              <span class="minus"></span>
            </button>
          </div>
        </div>
      </div>
      <div class="add-gpu-card">
        <span class="add-gpu-card_title">Add another type card</span>
        <button class="plus" @click="addCard"></button>
      </div>
      <div class="calculate-btn-wraper">
        <button class="calculate-btn" @click="calculate">Calculate</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { generateConsoleData } from '../../assets/scripts/generateConsoleData'
import { framesValidate } from '../../assets/scripts/framesValidation'
import * as gpu from '../../assets/static/gpu.json'

export default {
  name: 'PcSettings',
  data: () => ({
    gpuData: gpu.default,
  }),
  computed: {
    ...mapState({
      validationData: 'validationData',
      gpuCards: 'gpuCards',
      renderInfo: 'renderInfo',
    }),
  },

  methods: {
    changeCardData(e) {
      const PARENT_LVL = 4
      let parent = e.target
      const TARGET_KEY = e.target.dataset.key

      for (let i = 0; i <= PARENT_LVL; i++) {
        parent = parent.parentNode
        i++
      }

      this.$store.commit('SET_GPU_DATA', {
        gpuValue: e.target.value,
        gpuId: parent.id,
        key: TARGET_KEY,
      })
    },
    deleteCard(e) {
      const MAX_LVL = 4
      let card = e.target

      if (this.gpuCards.length >= 2) {
        for (var index = 0; index < MAX_LVL; index++) {
          card = card.parentNode
          if (card.classList.contains('gpu-card')) {
            index = MAX_LVL
          }
        }
        card.style.left = '-100%'
        card.style.opacity = '0'
        setTimeout(() => {
          card.style.display = 'none'
          this.$store.commit('DEL_GPU_CARD', {
            gpuId: card.id,
          })
        }, 300)
      }
    },
    addCard() {
      this.$store.commit('ADD_GPU_CARD')
    },
    calculate() {
      if (!this.validationData.frames) {
        framesValidate(this.validationData.frames)
      } else {
        const gpuCards = this.gpuCards,
          gpuData = this.gpuData,
          renderInfo = this.renderInfo

        let clietBenchmark = 0,
          renderTimeHours = Number(renderInfo.renderTime.hours) || 1,
          renderTimeMinutes = Number(renderInfo.renderTime.minutes) || 1,
          clientRenderTime = renderTimeHours * 60 + renderTimeMinutes,
          FramesCount = Number(renderInfo.framesCount) || '1',
          RenderTime,
          Price

        gpuCards.forEach((userCard) => {
          let cardBenchmark = Number(
              gpuData.benchmark[userCard.graphicsCardModel]
            ),
            countCards = Number(userCard.numberOfCards)

          clietBenchmark += cardBenchmark * countCards
        })

        RenderTime = Math.floor(
          (clietBenchmark / 50) * clientRenderTime * FramesCount
        )
        Price = RenderTime * 10

        this.$store.commit('SET_CALCULATED_DATA', {
          RenderTime,
          Price,
        })

        generateConsoleData(gpuCards, renderInfo, clietBenchmark, RenderTime)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.gpu-settings-wraper {
  .gpu-card-delete_mobile {
    @include cross(12px, 12px, none);
  }
  .gpu-h3-mobile {
    display: none;
  }
  .gpu-card {
    position: relative;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    opacity: 1;
    transition: 0.3s;

    .gpu-inputS-wraper {
      display: flex;
      align-items: center;

      .gpu-card-delete {
        display: block;
        width: 20px;
        height: 20px;
        background-color: $blue;
        border-radius: 15px;
        border: none;
        transform: translateY(5px);
        cursor: pointer;
        .minus {
          display: block;
          width: 100%;
          height: 2px;
          background-color: #ffffff;
        }
      }
      .gpu-wraper {
        position: relative;
        margin: 14px 25px 14px 0;
        .gpu-input {
          display: block;
          width: 156px;
          margin: 7px auto;
          appearance: none;
          color: $input_text_color;
          &-title {
            color: $card_main_color;
            font-size: 14px;
          }
        }
        .arrow {
          content: '';
          position: absolute;
          right: 15px;
          top: 50%;
          width: 10px;
          height: 10px;
          border: solid #526ae5;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }
    }
  }
  .add-gpu-card {
    display: flex;
    align-items: center;
    &_title {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      color: $card_main_color;
    }
    .plus {
      position: relative;
      display: block;
      width: 20px;
      height: 20px;
      margin: 0 15px;
      border: none;
      border-radius: 15px;
      background-color: $blue;
      cursor: pointer;
      &::after,
      &::before {
        content: '';
        position: absolute;
        left: 5px;
        top: 46%;
        width: 50%;
        height: 2px;
        background-color: #ffffff;
      }
      &::after {
        transform: rotate(90deg);
      }
    }
  }
  .calculate-btn-wraper {
    display: flex;
    justify-content: center;
    align-items: center;
    .calculate-btn {
      flex-basis: 180px;
      height: 40px;
      background: #526ae5;
      border: 1px solid rgba(206, 208, 214, 0.3);
      box-sizing: border-box;
      box-shadow: -5px -5px 10px #fafbff, 5px 5px 10px #a6abbd;
      border-radius: 46px;
      font-family: $second_font;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 18px;
      cursor: pointer;
      color: #ffffff;
    }
  }
}

@media screen and (max-width: 746px) {
  .gpu-settings-wraper {
    .calculate-btn-wraper {
      padding: 20px 0;
    }
    .gpu-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      .gpu-inputS-wraper {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        max-width: 306px;
        width: 100%;
        .gpu-card-delete {
          display: none;
        }
        .gpu-wraper {
          margin: 14px auto 14px auto;
          .gpu-input {
            &-title {
              color: $card_main_color;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 599px) {
  .gpu-settings-wraper {
    padding: 0;
    margin: 16px 15px;
    background-color: transparent;
    .gpu-h3-main {
      display: none;
    }
    .gpu-h3-mobile {
      display: block;
      margin-top: 13px;
    }
    .gpu-card {
      margin: 8px auto 0 auto;
      padding: 20px 0;
      background: #ffffff;
      .gpu-card-delete_mobile {
        display: block;
      }
      .gpu-inputS-wraper {
        max-width: 200px;
        .gpu-wraper {
          margin: 17px auto 0 auto;
        }
      }
    }
    .add-gpu-card {
      justify-content: center;
      background-color: #ffffff;
      &_title {
        margin-left: 30px;
        line-height: 17px;
        text-align: center;
      }
    }
    .calculate-btn-wraper {
      padding: 20px 0;
      background-color: #ffffff;
    }
  }
}
</style>
