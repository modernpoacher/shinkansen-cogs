declare module '#cogs/cogs/number' {
  import {
    ValueCog
  } from '#cogs/cogs'

  export type NumberProps = CogsTypes.Cogs.Number.NumberProps

  export default class NumberCog<P extends NumberProps> extends ValueCog<Omit<Omit<P, 'value'>, 'defaultValue'>> {
    handleChange (
      value?: string | string[]
    ): void
  }
}

declare module '@modernpoacher/cogs/cogs/number' {
  export { default } from '#cogs/cogs/number'
  export * from '#cogs/cogs/number'
}
