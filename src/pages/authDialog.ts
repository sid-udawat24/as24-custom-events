export const AuthDialogTypeChangeEvent = 'AUTH_DIALOG_TYPE_CHANGE_EVENT'

export enum AuthDialogType {
  SHOW_LOGIN_VIEW,
  SHOW_REGISTRATION_VIEW,
  SHOW_SOCIAL_VIEW
}

export type AuthDialogTypeChange = {
  dialog: AuthDialogType
}

declare global {
  interface DocumentEventMap {
    [AuthDialogTypeChangeEvent]: CustomEvent<AuthDialogTypeChange>
  }
}
