export const AuthDialogTypeChangeEvent = 'AUTH_DIALOG_TYPE_CHANGE_EVENT'

export type AuthDialogTypeChange = {
  clientId?: string
  redirectUrl?: string
}

declare global {
  interface DocumentEventMap {
    [AuthDialogTypeChangeEvent]: CustomEvent<AuthDialogTypeChange>
  }
}
