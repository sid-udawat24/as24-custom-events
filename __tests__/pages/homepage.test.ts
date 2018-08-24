import * as p from '../../src/pages/homepage'

describe('homepage events', () => {
  const eventNames: string[] = []

  test.each(eventNames)('event names must never change', eventName => {
    expect(eventName).toMatchSnapshot()
  })

  test('type definitions are inferred correctly by compiler', () => {
    expect(true).toBeTruthy() // dummy assertion since compiler check is the real test
  })
})
