import * as index from '../src/index'

test('all expected exports are present', () => {
  expect(index.HomePage).not.toBeUndefined
  expect(index.ListPage).not.toBeUndefined
  expect(index.AuthDialog).not.toBeUndefined
  expect(index.Global).not.toBeUndefined
  expect(index.strictCustomEvent).not.toBeUndefined
})
