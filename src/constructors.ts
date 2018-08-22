import { As24Event, ListPageEventMap } from "./events";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Generates an As24 Custom Event with additional type-checks (so name & payload are properly correlated)
 */
export const newAs24Event = <T extends As24Event, D extends T["detail"], N extends T["name"]>(
  name: N,
  payload: Omit<CustomEventInit<D>, "detail"> & {
    detail: D;
  } /* we know better than the generic CustomEventInit since detail must match the shape of the matching event */
) => new CustomEvent(name, payload);

declare global {
  interface Document {
    /**
     * Extend document addEventListener with overloaded type that checks the event listener name/payload wiring is consistent to the referred As24Event
     * We only extend this on `Document` because by convention we will fire all custom events on the document root.
     * Usage: i.e. document.addEventListener<ListPageEventMap["clFilterUpdate"]>("CL_FILTER_UPDATE", e => {});
     */
    addEventListener<T extends As24Event>(
      type: T["name"],
      listener: (this: Document, ev: CustomEvent<T["detail"]>) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
  }
}
