'use strict'
function removeAlert(e) {
  const FRAMES_WRAP_CLASS_LIST = e.parentNode.parentNode.classList
  FRAMES_WRAP_CLASS_LIST.contains('alert-validate')
    ? FRAMES_WRAP_CLASS_LIST.remove('alert-validate')
    : true
}

export { removeAlert }
