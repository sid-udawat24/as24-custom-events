import * as p from '../../src/pages/savedSearchesEdit'

describe('page events', () => {
  const eventNames = [p.SearchMaskFilterUpdate]

  test.each(eventNames)('event names must never change', eventName => {
    expect(eventName).toMatchSnapshot()
  })

  test('type definitions are inferred correctly by compiler', () => {
    document.addEventListener(p.SearchMaskFilterUpdate, e => e.detail.query)
    expect(true).toBeTruthy() // dummy assertion since compiler check is the real test
  })
})
