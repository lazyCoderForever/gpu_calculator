<template>
  <div class="col s12 m12 l12">
    <div class="gpu-settings-wraper card-wraper">
      <div class="gpu-card">
        <h3 class="gpu-h3 global-h3">Your PC</h3>
        <div class="gpu-inputS-wraper">
          <div class="gpu-wraper">
            <span class="gpu-input-title">Graphics card</span>
            <select
              name="type-card"
              id="type-card"
              class="basic-input gpu-input"
            >
              <option value="Gt">Gt</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <span class="arrow"></span>
          </div>
          <div class="gpu-wraper">
            <span class="gpu-input-title">Graphics card line</span>
            <select
              name="type-card"
              id="type-card"
              class="basic-input gpu-input"
            >
              <option value="4xx">4xx</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <span class="arrow"></span>
          </div>
          <div class="gpu-wraper">
            <span class="gpu-input-title">Graphics card model</span>
            <select
              name="type-card"
              id="type-card"
              class="basic-input gpu-input"
            >
              <option value="GT 420">GT 420</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <span class="arrow"></span>
          </div>
          <div class="gpu-wraper">
            <span class="gpu-input-title">Number or cards</span>
            <select
              name="type-card"
              id="type-card"
              class="basic-input gpu-input"
            >
              <option value="Gt">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <span class="arrow"></span>
          </div>
          <button class="gpu-card-delete">
            <span class="minus"></span>
          </button>
        </div>
      </div>
      <div class="gpu-card">
        <div class="gpu-inputS-wraper">
          <div class="gpu-wraper">
            <span class="gpu-input-title">Graphics card</span>
            <select
              name="type-card"
              id="type-card"
              class="basic-input gpu-input"
            >
              <option value="Gt">Gt</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <span class="arrow"></span>
          </div>
          <div class="gpu-wraper">
            <span class="gpu-input-title">Graphics card line</span>
            <select
              name="type-card"
              id="type-card"
              class="basic-input gpu-input"
            >
              <option value="4xx">4xx</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <span class="arrow"></span>
          </div>
          <div class="gpu-wraper">
            <span class="gpu-input-title">Graphics card model</span>
            <select
              name="type-card"
              id="type-card"
              class="basic-input gpu-input"
            >
              <option value="GT 420">GT 420</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <span class="arrow"></span>
          </div>
          <div class="gpu-wraper">
            <span class="gpu-input-title">Number or cards</span>
            <select
              name="type-card"
              id="type-card"
              class="basic-input gpu-input"
            >
              <option value="Gt">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <span class="arrow"></span>
          </div>
          <button class="gpu-card-delete">
            <span class="minus"></span>
          </button>
        </div>
      </div>
      <div class="add-gpu-card">
        <span class="add-gpu-card_title">Add another type card</span>
        <button class="plus"></button>
      </div>
      <div class="calculate-btn-wraper">
        <button class="calculate-btn">Calculate</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PcSettings',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.gpu-settings-wraper {
  .gpu-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

      color: #ffffff;
    }
  }
}
</style>
