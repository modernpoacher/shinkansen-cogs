declare module '#cogs/cogs/email' {
  import {
    ValueCog
  } from '#cogs/cogs'

  export type EmailProps = CogsTypes.Cogs.Email.EmailProps

  export default class EmailCog<P extends EmailProps> extends ValueCog<P> {
    handleChange (
      value?: string | string[]
    ): void
  }
}

declare module '@modernpoacher/cogs/cogs/email' {
  export { default } from '#cogs/cogs/email'
  export * from '#cogs/cogs/email'
}
