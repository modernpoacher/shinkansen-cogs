declare module '#cogs/cogs/select' {
  import {
    ValueCog
  } from '#cogs/cogs'

  export type SelectProps = CogsTypes.Cogs.Select.SelectProps

  export default class SelectCog<P extends SelectProps> extends ValueCog<Omit<Omit<P, 'value'>, 'defaultValue'>> {
    handleChange (
      value?: string | string[]
    ): void
  }
}

declare module '@modernpoacher/cogs/cogs/select' {
  export { default } from '#cogs/cogs/select'
  export * from '#cogs/cogs/select'
}
