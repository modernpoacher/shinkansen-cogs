declare module '#cogs/cogs/text/title' {
  import Title from '#cogs/components/title'

  export type TextProps = CogsTypes.Components.Title.Text.TextProps

  export default class TextTitle<P extends TextProps> extends Title<P> {}
}

declare module '@modernpoacher/cogs/cogs/text/title' {
  export { default } from '#cogs/cogs/text/title'
  export * from '#cogs/cogs/text/title'
}
