'use strict'
function generateConsoleData(
  usersInputData,
  rendererData,
  totalBenchmark,
  inputRenderTime
) {
  let modelsList = usersInputData.map((el) => {
    return el.graphicsCardModel
  })

  const consoleData = {
    models: modelsList.join(';'),
    benchmark: totalBenchmark,
    rendererInfo: {
      sceneType: rendererData.sceneType,
      framesCount: Number(rendererData.framesCount),
      renderTime: Number(inputRenderTime),
    },
  }

  console.log(consoleData)
}

export { generateConsoleData }
