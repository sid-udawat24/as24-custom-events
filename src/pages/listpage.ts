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
  }
}

export const ClassifiedListTotalCountUpdate = 'TOTAL_COUNT_UPDATE'
export type ClassifiedListTotalCountUpdate = {
  totalCount: number | null
}

// inform compiler of available custom events
declare global {
  interface DocumentEventMap {
    [ClassifiedListFilterUpdate]: CustomEvent<ClassifiedListFilterUpdate>
    [ClassifiedListTotalCountUpdate]: CustomEvent<ClassifiedListTotalCountUpdate>
  }
}
