declare module '#cogs/cogs/textarea/field' {
  import {
    ValueField
  } from '#cogs/components/field'

  export type TextareaProps = CogsTypes.Components.Field.Textarea.TextareaProps

  export default class TextareaField<P extends TextareaProps> extends ValueField<P> {}
}

declare module 'shinkansen-cogs/cogs/textarea/field' {
  export { default } from '#cogs/cogs/textarea/field'
  export * from '#cogs/cogs/textarea/field'
}
