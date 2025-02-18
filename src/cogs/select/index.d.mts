declare module '#cogs/cogs/select' {
  import {
    ValueCog
  } from '#cogs/cogs'

  type SelectProps = CogsTypes.Cogs.Cog.Select.SelectProps

  export default class SelectCog<P extends SelectProps> extends ValueCog<Omit<Omit<P, 'value'>, 'defaultValue'>> {
    handleChange (
      name: string,
      value?: string | string[]
    ): void
  }
}

declare module 'shinkansen-cogs/cogs/select' {
  export type SelectProps = CogsTypes.Cogs.Cog.Select.SelectProps

  export { default } from '#cogs/cogs/select'
}
