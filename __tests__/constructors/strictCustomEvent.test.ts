import strictCustomEvent from '../../src/constructors/strictCustomEvent'
import * as p from '../../src/pages/listpage'
import { strict } from 'assert'

describe('strict custom events', () => {
  test('proxy function call to regular CustomEvent', () => {
    const payload = { detail: { totalCount: 10 } }
    const strictEvent = strictCustomEvent(p.ClassifiedListTotalCountUpdate, payload)
    const event = new CustomEvent(p.ClassifiedListTotalCountUpdate, payload)

    expect(strictEvent.detail).toEqual(event.detail)
    expect(strictEvent.bubbles).toEqual(event.bubbles)
  })
})
