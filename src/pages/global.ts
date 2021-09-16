import * as ListPage from './listpage'

// Events that are present across all pages

/**
 * Privacy Consent Service UI events to show overlay
 */
export const PcsUiShowOverlayEvent = 'PCS_UI_SHOW_OVERLAY'
export type PcsUiShowOverlayEventPayload = {
  type: typeof PcsUiShowOverlayEvent
  timeout: number
}

/**
 * Privacy Consent Service UI events to show DOI OptIn overlay
 */
export const PcsUiShowDoiOptinOverlayEvent = 'PCS_UI_SHOW_DOI_OPTIN_OVERLAY'
export type PcsUiShowDoiOptinOverlayEventPayload = {
  type: typeof PcsUiShowDoiOptinOverlayEvent
  timeout: number
}

/**
 * Watchlist event
 */
export const WatchlistEvent = 'AS24_WATCHLIST_EVENT'
export const WatchlistEventCountUpdate = 'WATCHLIST_COUNT_UPDATE'
export type WatchlistEventCountUpdate = {
  type: typeof WatchlistEventCountUpdate
  value: number
}
export type WatchlistEvent = WatchlistEventCountUpdate

/**
 * Indicates that the favorites client finished the initialization
 * and is ready to accept commands.
 */
export const FavoritesReady = 'FAVORITES:READY'
export type FavoritesReady = undefined

export const FavoriteAddedEvent = 'WATCHLIST:FAVORITE_ADDED'
export const FavoriteRemovedEvent = 'WATCHLIST:FAVORITE_REMOVED'

export type FavoriteAddedEventPayload = {
  type: typeof FavoriteAddedEvent
  value: string
}
export type FavoriteRemovedEventPayload = {
  type: typeof FavoriteRemovedEvent
  value: string
}

// inform compiler of the as24 custom events
declare global {
  interface DocumentEventMap {
    [WatchlistEvent]: CustomEvent<WatchlistEvent>
    [FavoritesReady]: CustomEvent<FavoritesReady>
    [FavoriteAddedEvent]: CustomEvent<FavoriteAddedEventPayload>
    [FavoriteRemovedEvent]: CustomEvent<FavoriteRemovedEventPayload>
    [PcsUiShowOverlayEvent]: CustomEvent<PcsUiShowOverlayEventPayload>
    [PcsUiShowDoiOptinOverlayEvent]: CustomEvent<PcsUiShowDoiOptinOverlayEventPayload>
  }
}
