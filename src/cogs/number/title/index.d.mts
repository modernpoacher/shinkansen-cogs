declare module '#cogs/cogs/number/title' {
  import Title from '#cogs/components/title'

  type NumberProps = CogsTypes.Components.Title.Number.NumberProps

  export default class NumberTitle<P extends NumberProps> extends Title<P> {}
}

declare module 'shinkansen-cogs/cogs/number/title' {
  export type NumberProps = CogsTypes.Components.Title.Number.NumberProps

  export { default } from '#cogs/cogs/number/title'
}
