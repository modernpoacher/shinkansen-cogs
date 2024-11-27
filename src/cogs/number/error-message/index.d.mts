declare module '#cogs/cogs/number/error-message' {
  import ErrorMessage from '#cogs/components/error-message'

  export default class NumberErrorMessage extends ErrorMessage {}
}

declare module '@modernpoacher/cogs/cogs/number/error-message' {
  export { default } from '#cogs/cogs/number/error-message'
}
