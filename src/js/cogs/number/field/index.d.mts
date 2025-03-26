declare module '#cogs/cogs/number/field' {
  import {
    ValueField
  } from '#cogs/components/field'

  export type NumberProps = CogsTypes.Components.Field.Number.NumberProps

  export default class NumberField<P extends NumberProps> extends ValueField<P> {}
}

declare module '@modernpoacher/cogs/cogs/number/field' {
  export { default } from '#cogs/cogs/number/field'
  export * from '#cogs/cogs/number/field'
}
