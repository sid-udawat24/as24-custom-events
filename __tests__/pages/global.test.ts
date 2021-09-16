import * as p from '../../src/pages/global'

describe('global events', () => {
  const eventNames: string[] = [
    p.WatchlistEvent,
    p.FavoritesReady,
    p.FavoriteAddedEvent,
    p.FavoriteRemovedEvent,
    p.PcsUiShowOverlayEvent,
    p.PcsUiShowDoiOptinOverlayEvent
  ]

  test.each(eventNames)('event names must never change', eventName => {
    expect(eventName).toMatchSnapshot()
  })

  test('type definitions are inferred correctly by compiler', () => {
    document.addEventListener(p.WatchlistEvent, e => e.detail.value as number)
    document.addEventListener(p.FavoritesReady, e => e.detail as undefined)
    document.addEventListener(p.FavoriteAddedEvent, e => e.detail.value as string)
    document.addEventListener(p.FavoriteRemovedEvent, e => e.detail.value as string)
    document.addEventListener(p.PcsUiShowOverlayEvent, e => e.detail.timeout as number)
    document.addEventListener(p.PcsUiShowDoiOptinOverlayEvent, e => e.detail.timeout as number)
    expect(true).toBeTruthy() // dummy assertion since compiler check is the real test
  })
})
