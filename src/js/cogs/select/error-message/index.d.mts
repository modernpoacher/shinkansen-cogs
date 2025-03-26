declare module '#cogs/cogs/select/error-message' {
  import ErrorMessage from '#cogs/components/error-message'

  export default class SelectErrorMessage extends ErrorMessage {}
}

declare module '@modernpoacher/cogs/cogs/select/error-message' {
  export { default } from '#cogs/cogs/select/error-message'
}
