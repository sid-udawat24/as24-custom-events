// Events used for template integration / testing. Do not remove

/**
 * Fictitious fragment initialization event
 */
export const SomeFragmentInitializationExample = 'SOME_FRAGMENT:INITIALIZED'
export type SomeFragmentInitializationExample = {
  /**
   * Example payload
   */
  foo: boolean
}

/**
 * Tatsu service template integration example event
 */
export const TatsuServiceTemplateSelectImage = 'TATSU_SERVICE_TEMPLATE:SELECT_IMAGE'
export type TatsuServiceTemplateSelectImage = {
  /**
   * Example payload
   */
  selectedImage: number
}

// Add events to Document
declare global {
  interface DocumentEventMap {
    [SomeFragmentInitializationExample]: CustomEvent<SomeFragmentInitializationExample>
    [TatsuServiceTemplateSelectImage]: CustomEvent<TatsuServiceTemplateSelectImage>
  }
}
