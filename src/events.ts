type StandardEvent<T = any> = {
  name: string;
  detail: T;
};

interface EventMap {
  [k: string]: StandardEvent;
}

export interface ListPageEventMap extends EventMap {
  /**
   * Triggered on every filter change
   */
  clFilterUpdate: {
    name: "CL_FILTER_UPDATE";
    detail: {
      searchUrls: {
        /**
         * Search url with legacy parameters
         */
        legacy: string;
        /**
         * Search url with newer `mmm` parameters
         */
        standard: string;
      };
    };
  };
  /**
   * Triggered if the total count actually changes, not if the value is the same as the previous one
   */
  totalCountUpdate: {
    name: "TOTAL_COUNT_UPDATE";
    detail: {
      totalCount: number | null;
    };
  };
}

export interface HomePageEventMap {
  clFilterUpdate: ListPageEventMap["clFilterUpdate"];
  totalCountUpdate: ListPageEventMap["totalCountUpdate"];
}

type As24EventMap = ListPageEventMap | HomePageEventMap;

export type As24Event = As24EventMap[keyof As24EventMap];
