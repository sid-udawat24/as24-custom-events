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

export const SavedSearchesFragmentInitialization = 'SAVED_SEARCHES_FRAGMENT_INIT'
export type SavedSearchesFragmentInitialization = undefined

export const ListItemsInitialization = 'LIST_ITEMS_INITIALIZED'
export type ListItemsInitialization = undefined

// inform compiler of the as24 custom events
declare global {
  interface DocumentEventMap {
    [ClassifiedListFilterUpdate]: CustomEvent<ClassifiedListFilterUpdate>
    [ClassifiedListTotalCountUpdate]: CustomEvent<ClassifiedListTotalCountUpdate>
    [SavedSearchesFragmentInitialization]: CustomEvent<SavedSearchesFragmentInitialization>
    [ListItemsInitialization]: CustomEvent<ListItemsInitialization>
  }
}
