// https://basarat.gitbooks.io/typescript/docs/tips/barrel.html

import * as Example from './pages/example'
import * as Global from './pages/global'
import * as HomePage from './pages/homepage'
import * as ListPage from './pages/listpage'

export { default as strictCustomEvent } from './constructors/strictCustomEvent'

export { ListPage }
export { HomePage }
export { Example }
export { Global }
