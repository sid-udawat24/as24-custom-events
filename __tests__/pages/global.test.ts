import * as p from '../../src/pages/global'

describe('global events', () => {
  const eventNames: string[] = []

  test.each(eventNames)('event names must never change', eventName => {
    expect(eventName).toMatchSnapshot()
  })

  test('type definitions are inferred correctly by compiler', () => {
    document.addEventListener(
      p.WatchlistEvent,
      e => (e.detail.type as 'WATCHLIST_COUNT_UPDATE') && (e.detail.value as number)
    )
    expect(true).toBeTruthy() // dummy assertion since compiler check is the real test
  })
})
