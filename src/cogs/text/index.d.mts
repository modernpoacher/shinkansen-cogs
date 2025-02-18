declare module '#cogs/cogs/text' {
  import {
    ValueCog
  } from '#cogs/cogs'

  type TextProps = CogsTypes.Cogs.Cog.Text.TextProps

  export default class NumberCog<P extends TextProps> extends ValueCog<P> {
    handleChange (
      name: string,
      value?: string | string[]
    ): void
  }
}

declare module 'shinkansen-cogs/cogs/text' {
  export { default } from '#cogs/cogs/text'
}
