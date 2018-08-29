export const ClassifiedListFilterUpdate = 'CL_FILTER_UPDATE'
export type ClassifiedListFilterUpdate = {
  searchUrls: {
    /**
     * Search url with legacy parameters
     */
    legacy: string
    /**
     * Search url with newer `mmm` parameters
     */
    standard: string
    /**
     * Standard search query without page parameter
     */
    unpaginatedStandard: string
    /**
     * Full search url including path
     */
    fullUrl: string
  }
}

export const ClassifiedListTotalCountUpdate = 'TOTAL_COUNT_UPDATE'
export type ClassifiedListTotalCountUpdate = {
  totalCount: number | null
}

/**
 * Used by the list-item summary fragment to bind internal events
 */
export const ListItemsChanged = 'list-items:changed'
export type ListItemsChanged = undefined

/**
 * Indicates the list items summary fragment has been wired internally
 */
export const ListItemsInitialized = 'LIST_ITEMS_INITIALIZED'
export type ListItemsInitialized = undefined

export const SavedSearchesFragmentInitialization = 'SAVED_SEARCHES_FRAGMENT_INIT'
export type SavedSearchesFragmentInitialization = undefined

// inform compiler of the as24 custom events
declare global {
  interface DocumentEventMap {
    [ClassifiedListFilterUpdate]: CustomEvent<ClassifiedListFilterUpdate>
    [ClassifiedListTotalCountUpdate]: CustomEvent<ClassifiedListTotalCountUpdate>
    [SavedSearchesFragmentInitialization]: CustomEvent<SavedSearchesFragmentInitialization>
    [ListItemsChanged]: CustomEvent<ListItemsChanged>
    [ListItemsInitialized]: CustomEvent<ListItemsInitialized>
  }
}
