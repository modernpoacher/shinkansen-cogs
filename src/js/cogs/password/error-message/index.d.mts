declare module '#cogs/cogs/password/error-message' {
  import ErrorMessage from '#cogs/components/error-message'

  export default class PasswordErrorMessage extends ErrorMessage {}
}

declare module '@modernpoacher/cogs/cogs/password/error-message' {
  export { default } from '#cogs/cogs/password/error-message'
}
