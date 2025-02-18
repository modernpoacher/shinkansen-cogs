declare module '#cogs/cogs/password' {
  import {
    ValueCog
  } from '#cogs/cogs'

  type PasswordProps = CogsTypes.Cogs.Cog.Password.PasswordProps

  export default class NumberCog<P extends PasswordProps> extends ValueCog<P> {
    handleChange (
      name: string,
      value?: string | string[]
    ): void
  }
}

declare module 'shinkansen-cogs/cogs/password' {
  export { default } from '#cogs/cogs/password'
}
