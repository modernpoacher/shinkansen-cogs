declare module '#cogs/cogs/number/field' {
  import {
    ValueField
  } from '#cogs/components/field'

  type NumberProps = CogsTypes.Components.Field.Number.NumberProps

  export default class NumberField<P extends NumberProps> extends ValueField<P> {}
}

declare module 'shinkansen-cogs/cogs/number/field' {
  export type NumberProps = CogsTypes.Components.Field.Number.NumberProps

  export { default } from '#cogs/cogs/number/field'
}
