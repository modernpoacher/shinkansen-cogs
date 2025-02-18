declare module '#cogs/cogs/email' {
  import {
    ValueCog
  } from '#cogs/cogs'

  type EmailProps = CogsTypes.Cogs.Cog.Email.EmailProps

  export default class EmailCog<P extends EmailProps> extends ValueCog<P> {
    handleChange (
      name: string,
      value?: string | string[]
    ): void
  }
}

declare module 'shinkansen-cogs/cogs/email' {
  export type EmailProps = CogsTypes.Cogs.Cog.Email.EmailProps

  export { default } from '#cogs/cogs/email'
}
