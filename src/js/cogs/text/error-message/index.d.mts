declare module '#cogs/cogs/text/error-message' {
  import ErrorMessage from '#cogs/components/error-message'

  export default class TextErrorMessage extends ErrorMessage {}
}

declare module '@modernpoacher/cogs/cogs/text/error-message' {
  export { default } from '#cogs/cogs/text/error-message'
}
