import * as p from '../../src/pages/homepage'

describe('homepage events', () => {
  const eventNames: string[] = [p.ViewChange]

  test.each(eventNames)('event names must never change', eventName => {
    expect(eventName).toMatchInlineSnapshot(`"VIEW_CHANGE"`)
  })

  test('type definitions are inferred correctly by compiler', () => {
    document.addEventListener(p.ViewChange, e => e.detail.view as 'aisearch' | 'filters')
    expect(true).toBeTruthy() // dummy assertion since compiler check is the real test
  })
})
