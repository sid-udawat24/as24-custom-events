export const AuthDialogTypeChangeEvent = 'AUTH_DIALOG_TYPE_CHANGE_EVENT'
export const AuthDialogFragmentReadyEvent = 'AUTH_DIALOG_FRAGMENT_READY_EVENT'

export type AuthDialogFragmentReady = {}
export type AuthDialogTypeChange = {
  /**
   * clientId - OKTA app id, see https://docs.services.as24.tech/autoscout24/products/identity/howto/#register-a-new-client
   */
  clientId: string
  /**
   * final redirect to go to after successful sign/signup. If not defined, the current window.location.href will be used.
   * IMPORTANT: If the value is not autoscout24 domain, no redirection will happens.
   */
  redirectUrl?: string
  /**
   * The touchpoint of signin/signup attempt, i.e. 'pricehistory', 'pricehistory_icon'
   * Used to track opening event in GA.
   */
  tp?: string
  /**
   * Override existing texts on social-, login and registration view within the overlay
   */
  overrideText?: {
    // "Sign In"
    signInTitle: string
    // "Welcome!"
    signInTeaserTitle: string
    // "Log in and keep all your searches in one place."
    signInTeaserDescription: string
    // "Sign In"
    socialTitle: string
    // "Log in and keep all your searches in one place."
    socialDescription: string
    // "Sign up"
    signUpTitle: string
    // "Sign up and keep all your searches in one place."
    signUpDescription: string
  }
}

declare global {
  interface DocumentEventMap {
    [AuthDialogTypeChangeEvent]: CustomEvent<AuthDialogTypeChange>
    [AuthDialogFragmentReadyEvent]: CustomEvent<AuthDialogFragmentReady>
  }
}
