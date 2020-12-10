export const LoginDialogEvent = 'AS24_LOGIN_DIALOG_EVENT'
export const LoginDialogTypeChange = 'AS24_LOGIN_DIALOG_CHANGE'

export enum LoginDialogType {
  NONE = 'NONE',
  SIGN_IN_AND_UP = 'SIGN_IN_AND_UP',
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP'
}

export type LoginDialogTypeChange = {
  type: typeof LoginDialogTypeChange
  dialog: LoginDialogType
}

export type LoginDialogEvent = LoginDialogTypeChange

declare global {
  interface DocumentEventMap {
    [LoginDialogEvent]: CustomEvent<LoginDialogEvent>
    [LoginDialogTypeChange]: CustomEvent<LoginDialogTypeChange>
  }
}
