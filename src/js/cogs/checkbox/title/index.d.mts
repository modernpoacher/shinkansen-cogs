declare module '#cogs/cogs/checkbox/title' {
  import Title from '#cogs/components/title'

  export type CheckboxProps = CogsTypes.Components.Title.Checkbox.CheckboxProps

  export default class CheckboxTitle<P extends CheckboxProps> extends Title<P> {}
}

declare module '@modernpoacher/cogs/cogs/checkbox/title' {
  export { default } from '#cogs/cogs/checkbox/title'
  export * from '#cogs/cogs/checkbox/title'
}
