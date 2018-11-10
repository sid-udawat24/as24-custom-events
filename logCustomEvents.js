/**
 * Paste this code on the browser console to see logs of all custom events fired on `document` root element
 */
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

Object.keys(getEventListeners(document))
  .filter(name => standardEventNames.indexOf(name) === -1)
  .forEach(name =>
    document.addEventListener(name, e =>
      console.log(`%c Event ${name} pushed:`, 'color: green; font-weight:bold', e.detail)
    )
  )
