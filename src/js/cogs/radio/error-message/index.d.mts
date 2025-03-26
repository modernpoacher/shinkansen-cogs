declare module '#cogs/cogs/radio/error-message' {
  import ErrorMessage from '#cogs/components/error-message'

  export default class RadioErrorMessage extends ErrorMessage {}
}

declare module '@modernpoacher/cogs/cogs/radio/error-message' {
  export { default } from '#cogs/cogs/radio/error-message'
}
