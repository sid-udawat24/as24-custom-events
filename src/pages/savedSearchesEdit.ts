/**
 * Update search mask query
 */
export const SearchMaskFilterUpdate = 'SAVED_SEARCHES_EDIT:SEARCH_MASK_QUERY_UPDATE'
export type SearchMaskFilterUpdate = {
  query: string
}

declare global {
  interface DocumentEventMap {
    [SearchMaskFilterUpdate]: CustomEvent<SearchMaskFilterUpdate>
  }
}
