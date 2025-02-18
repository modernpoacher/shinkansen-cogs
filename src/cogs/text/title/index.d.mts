declare module '#cogs/cogs/text/title' {
  import Title from '#cogs/components/title'

  type TextProps = CogsTypes.Components.Title.Text.TextProps

  export default class TextTitle<P extends TextProps> extends Title<P> {}
}

declare module 'shinkansen-cogs/cogs/text/title' {
  export type TextProps = CogsTypes.Components.Title.Text.TextProps

  export { default } from '#cogs/cogs/text/title'
}
