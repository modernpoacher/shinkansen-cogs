declare module '#cogs/cogs/text' {
  import {
    ValueCog
  } from '#cogs/cogs'

  export type TextProps = CogsTypes.Cogs.Text.TextProps

  export default class TextCog<P extends TextProps> extends ValueCog<P> {
    handleChange (
      value?: string | string[]
    ): void
  }
}

declare module '@modernpoacher/cogs/cogs/text' {
  export { default } from '#cogs/cogs/text'
  export * from '#cogs/cogs/text'
}
