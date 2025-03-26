declare module '#cogs/cogs/radio/title' {
  import Title from '#cogs/components/title'

  export type RadioProps = CogsTypes.Components.Title.Radio.RadioProps

  export default class RadioTitle<P extends RadioProps> extends Title<P> {}
}

declare module '@modernpoacher/cogs/cogs/radio/title' {
  export { default } from '#cogs/cogs/radio/title'
  export * from '#cogs/cogs/radio/title'
}
