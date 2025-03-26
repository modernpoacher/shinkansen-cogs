declare module '#cogs/cogs/select/title' {
  import Title from '#cogs/components/title'

  export type SelectProps = CogsTypes.Components.Title.Select.SelectProps

  export default class SelectTitle<P extends SelectProps> extends Title<P> {}
}

declare module '@modernpoacher/cogs/cogs/select/title' {
  export { default } from '#cogs/cogs/select/title'
  export * from '#cogs/cogs/select/title'
}
