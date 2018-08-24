import * as p from '../../src/pages/ListPage'

describe('listpage events', () => {
  const eventNames = [p.ClassifiedListFilterUpdate, p.ClassifiedListTotalCountUpdate]

  test.each(eventNames)('event names must never change', eventName => {
    expect(eventName).toMatchSnapshot()
  })

  test('type definitions are inferred correctly by compiler', () => {
    document.addEventListener(p.ClassifiedListFilterUpdate, e => e.detail.searchUrls.legacy)
    document.addEventListener(p.ClassifiedListTotalCountUpdate, e => e.detail.totalCount)
    expect(true).toBeTruthy() // dummy assertion since compiler check is the real test
  })
})
