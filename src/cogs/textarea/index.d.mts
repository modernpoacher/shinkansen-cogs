declare module '#cogs/cogs/textarea' {
  import {
    ValueCog
  } from '#cogs/cogs'

  export type TextareaProps = CogsTypes.Cogs.Cog.Textarea.TextareaProps

  export default class TextareaCog<P extends TextareaProps> extends ValueCog<P> {
    handleChange (
      name: string,
      value?: string | string[]
    ): void
  }
}

declare module 'shinkansen-cogs/cogs/textarea' {
  export { default } from '#cogs/cogs/textarea'
  export * from '#cogs/cogs/textarea'
}
