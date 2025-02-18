declare module '#cogs/cogs/select/field' {
  import {
    ValueField
  } from '#cogs/components/field'

  type SelectProps = CogsTypes.Components.Field.Select.SelectProps

  export default class SelectField<P extends SelectProps> extends ValueField<P> {}
}

declare module 'shinkansen-cogs/cogs/select/field' {
  export type SelectProps = CogsTypes.Components.Field.Select.SelectProps

  export { default } from '#cogs/cogs/select/field'
}
