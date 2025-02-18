declare module '#cogs/cogs/textarea/title' {
  import Title from '#cogs/components/title'

  type TextareaProps = CogsTypes.Components.Title.Textarea.TextareaProps

  export default class TextareaTitle<P extends TextareaProps> extends Title<P> {}
}

declare module 'shinkansen-cogs/cogs/textarea/title' {
  export type TextareaProps = CogsTypes.Components.Title.Textarea.TextareaProps

  export { default } from '#cogs/cogs/textarea/title'
}
