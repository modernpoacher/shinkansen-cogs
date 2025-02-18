declare module '#cogs/cogs/radio/title' {
  import Title from '#cogs/components/title'

  type RadioProps = CogsTypes.Components.Title.Radio.RadioProps

  export default class RadioTitle<P extends RadioProps> extends Title<P> {}
}

declare module 'shinkansen-cogs/cogs/radio/title' {
  export type RadioProps = CogsTypes.Components.Title.Radio.RadioProps

  export { default } from '#cogs/cogs/radio/title'
}
