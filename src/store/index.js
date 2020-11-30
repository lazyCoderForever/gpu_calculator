import Vue from 'vue'
import Vuex from 'vuex'
import UUID, { uuid } from 'vue-uuid'
import * as gpu from '../assets/static/gpu.json'

Vue.use(Vuex)
Vue.use(UUID)

export default new Vuex.Store({
  state: {
    renderInfo: {
      sceneType: 'static',
      framesCount: '',
      renderTime: {
        hours: '',
        minutes: '',
      },
    },
    validationData: {
      frames: false,
    },
    gpuCards: [
      {
        _id: uuid.v1(),
        graphicsCard: 'GT',
        graphicsCardline: '4xx',
        graphicsCardModel: 'GT 420',
        numberOfCards: '1',
      },
      {
        _id: uuid.v1(),
        graphicsCard: 'GT',
        graphicsCardline: '4xx',
        graphicsCardModel: 'GT 420',
        numberOfCards: '1',
      },
    ],
    calculatedData: {
      time: '',
      price: '',
    },
  },
  mutations: {
    SET_SCENE(state, type) {
      state.renderInfo.sceneType = type
    },
    SET_GPU_DATA(state, { gpuValue, gpuId, key }) {
      switch (key) {
        case 'card':
          state.gpuCards.some((card) => {
            if (card._id === gpuId) {
              let Line = Object.keys(gpu.list[gpuValue])[0],
                Model = gpu.list[gpuValue][Line][0]

              card.graphicsCard = gpuValue
              card.graphicsCardline = Line // chage default 'graphicsCardline'
              card.graphicsCardModel = Model // chage default 'graphicsCardModel'
            } else {
              return false
            }
          })
          break
        case 'line':
          state.gpuCards.some((card) => {
            card._id === gpuId ? (card.graphicsCardline = gpuValue) : false
          })
          break
        case 'model':
          state.gpuCards.some((card) => {
            card._id === gpuId ? (card.graphicsCardModel = gpuValue) : false
          })
          break
        case 'number':
          state.gpuCards.some((card) => {
            card._id === gpuId ? (card.numberOfCards = gpuValue) : false
          })
          break
      }
    },
    SET_FRAMES_DATA(
      state,
      { frameInputId, frameInputValue, framesValidate = true }
    ) {
      if (frameInputId === 'count') {
        state.renderInfo.framesCount = frameInputValue
      } else {
        state.validationData.frames = framesValidate
        state.renderInfo.renderTime[frameInputId] = frameInputValue
      }
    },
    DEL_GPU_CARD(state, { gpuId }) {
      state.gpuCards = state.gpuCards.filter((card) => {
        return card._id !== gpuId
      })
    },
    ADD_GPU_CARD(state) {
      const defaultCard = {
        _id: uuid.v1(),
        graphicsCard: 'GT',
        graphicsCardline: '4xx',
        graphicsCardModel: 'GT 420',
        numberOfCards: '1',
      }
      state.gpuCards.push(defaultCard)
    },
    SET_CALCULATED_DATA(state, { RenderTime, Price }) {
      ;(state.calculatedData.time = RenderTime.toString()),
        (state.calculatedData.price = Price.toString())
    },
  },
  actions: {},
})
