declare module '#cogs/cogs/password' {
  import {
    ValueCog
  } from '#cogs/cogs'

  export type PasswordProps = CogsTypes.Cogs.Password.PasswordProps

  export default class PasswordCog<P extends PasswordProps> extends ValueCog<P> {
    handleChange (
      value?: string | string[]
    ): void
  }
}

declare module '@modernpoacher/cogs/cogs/password' {
  export { default } from '#cogs/cogs/password'
  export * from '#cogs/cogs/password'
}
