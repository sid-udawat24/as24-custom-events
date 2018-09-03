import * as p from '../../src/pages/example'

describe('homepage events', () => {
  const eventNames: string[] = [p.SomeFragmentInitializationExample, p.TatsuServiceTemplateSelectImage]

  test.each(eventNames)('event names must never change', eventName => {
    expect(eventName).toMatchSnapshot()
  })

  test('type definitions are inferred correctly by compiler', () => {
    document.addEventListener(p.SomeFragmentInitializationExample, e => e.detail.foo as boolean)
    document.addEventListener(p.TatsuServiceTemplateSelectImage, e => e.detail.selectedImage as number)
    expect(true).toBeTruthy() // dummy assertion since compiler check is the real test
  })
})
