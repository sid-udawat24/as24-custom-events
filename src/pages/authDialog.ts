export const AuthDialogTypeChangeEvent = 'AUTH_DIALOG_TYPE_CHANGE_EVENT'

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
   */
  tp?: string
}

declare global {
  interface DocumentEventMap {
    [AuthDialogTypeChangeEvent]: CustomEvent<AuthDialogTypeChange>
  }
}
