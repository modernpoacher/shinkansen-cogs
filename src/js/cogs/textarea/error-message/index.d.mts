declare module '#cogs/cogs/textarea/error-message' {
  import ErrorMessage from '#cogs/components/error-message'

  export default class TextareaErrorMessage extends ErrorMessage {}
}

declare module '@modernpoacher/cogs/cogs/textarea/error-message' {
  export { default } from '#cogs/cogs/textarea/error-message'
}
