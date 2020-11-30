'use strict'
function framesValidate(framesStorageData) {
  const FRAMES_TIME = document.querySelector('.frames-wraper .render-time')

  if (!framesStorageData) {
    FRAMES_TIME.classList.add('alert-validate')
  }
}

export { framesValidate }
