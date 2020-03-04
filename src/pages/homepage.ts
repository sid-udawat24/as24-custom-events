import * as ListPage from './listpage'

export const TestEvent = 'HOMEPAGE_TEST_EVENT'
export type TestEvent = {
  foo: boolean
}

export const ViewChange = 'VIEW_CHANGE'
export type ViewChange = {
  view: 'aisearch' | 'filters'
}

// Add events to Document
declare global {
  interface DocumentEventMap {
    [TestEvent]: CustomEvent<TestEvent>
    [ViewChange]: CustomEvent<ViewChange>
  }
}
