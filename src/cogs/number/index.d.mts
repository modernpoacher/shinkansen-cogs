declare module '#cogs/cogs/number' {
  import {
    ValueCog
  } from '#cogs/cogs'

  export type NumberProps = CogsTypes.Cogs.Cog.Number.NumberProps

  export default class NumberCog<P extends NumberProps> extends ValueCog<Omit<Omit<P, 'value'>, 'defaultValue'>> {
    handleChange (
      name: string,
      value?: string | string[]
    ): void
  }
}

declare module 'shinkansen-cogs/cogs/number' {
  export { default } from '#cogs/cogs/number'
  export * from '#cogs/cogs/number'
}
