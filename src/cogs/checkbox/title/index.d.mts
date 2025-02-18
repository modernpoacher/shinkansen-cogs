declare module '#cogs/cogs/checkbox/title' {
  import Title from '#cogs/components/title'

  type CheckboxProps = CogsTypes.Components.Title.Checkbox.CheckboxProps

  export default class CheckboxTitle<P extends CheckboxProps> extends Title<P> {}
}

declare module 'shinkansen-cogs/cogs/checkbox/title' {
  export type CheckboxProps = CogsTypes.Components.Title.Checkbox.CheckboxProps

  export { default } from '#cogs/cogs/checkbox/title'
}
