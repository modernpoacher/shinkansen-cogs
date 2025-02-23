declare module '#cogs/cogs/text' {
  import {
    ValueCog
  } from '#cogs/cogs'

  export type TextProps = CogsTypes.Cogs.Cog.Text.TextProps

  export default class TextCog<P extends TextProps> extends ValueCog<P> {
    handleChange (
      name: string,
      value?: string | string[]
    ): void
  }
}

declare module 'shinkansen-cogs/cogs/text' {
  export { default } from '#cogs/cogs/text'
  export * from '#cogs/cogs/text'
}
