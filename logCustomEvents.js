/**
 * Include this file into the dev build to see logs of all custom events fired on `document` root element
 */
window.as24CustomEventsDebugListeners = (function() {
  const standardEventNames = [
    'DOMContentLoaded',
    'MSGestureEnd',
    'MSPointerCancel',
    'MSPointerDown',
    'MSPointerMove',
    'MSPointerUp',
    'animationend',
    'blur',
    'change',
    'click',
    'collapse',
    'focus',
    'input',
    'keydown',
    'keyup',
    'mousedown',
    'mouseover',
    'pointercancel',
    'pointerdown',
    'pointermove',
    'pointerup',
    'scroll',
    'selectionchange',
    'touchcancel',
    'touchend',
    'touchmove',
    'touchstart',
    'transitionend',
    'trckd',
    'webkitAnimationEnd'
  ]

  // avoid double registration
  if (window.as24CustomEventsDebugListeners !== true) {
    Object.keys(getEventListeners(document))
      .filter(name => standardEventNames.indexOf(name) === -1)
      .forEach(name =>
        document.addEventListener(name, e =>
          console.info(`%c Event ${name}:`, 'color: green; font-weight:bold', e.detail)
        )
      )
  }

  return true
})()
