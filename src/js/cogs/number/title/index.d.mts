declare module '#cogs/cogs/number/title' {
  import Title from '#cogs/components/title'

  export type NumberProps = CogsTypes.Components.Title.Number.NumberProps

  export default class NumberTitle<P extends NumberProps> extends Title<P> {}
}

declare module '@modernpoacher/cogs/cogs/number/title' {
  export { default } from '#cogs/cogs/number/title'
  export * from '#cogs/cogs/number/title'
}
