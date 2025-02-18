declare module '#cogs/cogs/select/title' {
  import Title from '#cogs/components/title'

  type SelectProps = CogsTypes.Components.Title.Select.SelectProps

  export default class SelectTitle<P extends SelectProps> extends Title<P> {}
}

declare module 'shinkansen-cogs/cogs/select/title' {
  export type SelectProps = CogsTypes.Components.Title.Select.SelectProps

  export { default } from '#cogs/cogs/select/title'
}
