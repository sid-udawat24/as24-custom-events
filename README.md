# AS24 Custom Events

> TypeScript definitions for all custom events available on as24 pages

[![Build Status](https://travis-ci.org/Scout24/as24-custom-events.svg?branch=master)](https://travis-ci.org/Scout24/as24-custom-events)

[![codecov](https://codecov.io/gh/Scout24/as24-custom-events/branch/master/graph/badge.svg)](https://codecov.io/gh/Scout24/as24-custom-events)

This provides a glue at compile time between events produced in some component on a page and listeners on some other part that depend on an agreed event interface (name & payload)

## Installation:

Install as a regular `npm` package

```sh
yarn add as24-custom-events@latest
or
npm install --save as24-custom-events@latest
```

it's important to use the `@latest` tag so package is always up to date. It wouldn't help to pin to a particular version since at runtime the events will behave like `@latest`.

## Usage:

### Listen to custom events

To add an event listener somewhere on your page, you do the usual event listener registration on **Document** root element

```ts
// some file in your app

import { ListPage } from 'as24-custom-events'

document.addEventListener(ListPage.ClassifiedListFilterUpdate, e => console.log(e.detail.searchUrls.standard))
```

the compiler will know that the event is of type `e: ListPage.ClassifiedListFilterUpdate` since it can use indexed types.

### Firing custom events

All custom events should be fired on the top Document root. To fire an event in a typesafe way, you can use the helper [strictCustomEvent](./src/constructors/strictCustomEvent.ts). It has the same signature as the usual `CustomEvent` constructor but it's typesafe (will check for consistency between name and payload)

```ts
import { ListPage, strictCustomEvent } from 'as24-custom-events'

document.dispatchEvent(strictCustomEvent(ListPage.ClassifiedListTotalCountUpdate, { detail: {
  totalCount: 42
}})
```

The compiler will make sure that the payload in `detail` matches the event definition associated to the key.

## Polyfill

A custom polyfill for CustomEvent support on older browsers (IE11 and below) is [provided](./ADD LINK) in case you want to add it to your bundle

## Contributing

### Adding custom events

To add a new page event:

1. Either go to the existing [page](./src/pages) where your event is present or create a new page (if it's a global event that ocurrs on all pages add it to ["global page"](./src/pages/global.ts)).
2. Define both a `constant` with the event name and `type alias` with the payload (we exploit Typescript duality to handle types and values under same name)
3. Register the event on the `DocumentEventMap` so compiler knows about it everywhere. Note that this makes the events available only on the `Document` DOM element, which is good because that's where we should dispatch them.

### Versioning

Since the global events are not really controlled by this library (they are fired by other applications), even if we tag a change as breaking it's not like the consumers will be safe by staying on older versions since at runtime the events will be upgraded. We still use versioning to keep the clients informed of potential breaking changes (ideally there should be none)

### Rollup config

Rollup is used to bundle the library. [Bundle Statistics](./stats/index.html) are available after build to inspect package size.
