declare module '#cogs/cogs/checkbox/field' {
  import {
    CheckField
  } from '#cogs/components/field'

  export type CheckboxProps = CogsTypes.Components.Field.Checkbox.CheckboxProps

  export default class CheckboxField<P extends CheckboxProps> extends CheckField<P> {}
}

declare module '@modernpoacher/cogs/cogs/checkbox/field' {
  export { default } from '#cogs/cogs/checkbox/field'
  export * from '#cogs/cogs/checkbox/field'
}
