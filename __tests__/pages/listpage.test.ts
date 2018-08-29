import * as p from '../../src/pages/listpage'

describe('listpage events', () => {
  const eventNames = [
    p.ClassifiedListFilterUpdate,
    p.ClassifiedListTotalCountUpdate,
    p.ListItemsChanged,
    p.SavedSearchesFragmentInitialization,
    p.ListItemsInitialized
  ]

  test.each(eventNames)('event names must never change', eventName => {
    expect(eventName).toMatchSnapshot()
  })

  test('type definitions are inferred correctly by compiler', () => {
    document.addEventListener(p.ClassifiedListFilterUpdate, e => e.detail.searchUrls.legacy)
    document.addEventListener(p.ClassifiedListTotalCountUpdate, e => e.detail.totalCount)
    document.addEventListener(p.ListItemsChanged, e => e.detail as undefined)
    document.addEventListener(p.ListItemsInitialized, e => e.detail as undefined)
    document.addEventListener(p.SavedSearchesFragmentInitialization, e => e.detail as undefined)
    expect(true).toBeTruthy() // dummy assertion since compiler check is the real test
  })
})
