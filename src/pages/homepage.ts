import * as ListPage from './listpage'

export const TestEvent = 'HOMEPAGE_TEST_EVENT'
export type TestEvent = {
  foo: boolean
}

// Add events to Document
declare global {
  interface DocumentEventMap {
    [TestEvent]: CustomEvent<TestEvent>
  }
}
