declare module '#cogs/cogs/email/error-message' {
  import ErrorMessage from '#cogs/components/error-message'

  export default class EmailErrorMessage extends ErrorMessage {}
}

declare module '@modernpoacher/cogs/cogs/email/error-message' {
  export { default } from '#cogs/cogs/email/error-message'
}
