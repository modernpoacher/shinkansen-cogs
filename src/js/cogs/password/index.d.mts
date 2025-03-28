declare module '#cogs/cogs/password' {
  import {
    ValueCog
  } from '#cogs/cogs'

  export type PasswordProps = CogsTypes.Cogs.Password.PasswordProps

  export default class PasswordCog<P extends PasswordProps> extends ValueCog<P> {
    handleChange (
      name: string,
      value?: string | string[]
    ): void
  }
}

declare module 'shinkansen-cogs/cogs/password' {
  export { default } from '#cogs/cogs/password'
  export * from '#cogs/cogs/password'
}
