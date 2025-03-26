declare module '#cogs/cogs/textarea' {
  import {
    ValueCog
  } from '#cogs/cogs'

  export type TextareaProps = CogsTypes.Cogs.Textarea.TextareaProps

  export default class TextareaCog<P extends TextareaProps> extends ValueCog<P> {
    handleChange (
      value?: string | string[]
    ): void
  }
}

declare module '@modernpoacher/cogs/cogs/textarea' {
  export { default } from '#cogs/cogs/textarea'
  export * from '#cogs/cogs/textarea'
}
