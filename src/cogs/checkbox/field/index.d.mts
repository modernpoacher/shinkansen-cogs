declare module '#cogs/cogs/checkbox/field' {
  import {
    CheckField
  } from '#cogs/components/field'

  type CheckboxProps = CogsTypes.Components.Field.Checkbox.CheckboxProps

  export default class CheckboxField<P extends CheckboxProps> extends CheckField<P> {}
}

declare module 'shinkansen-cogs/cogs/checkbox/field' {
  export type CheckboxProps = CogsTypes.Components.Field.Checkbox.CheckboxProps

  export { default } from '#cogs/cogs/checkbox/field'
}
