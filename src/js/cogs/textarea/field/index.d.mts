declare module '#cogs/cogs/textarea/field' {
  import type { ChangeEvent } from 'react'

  import {
    ValueField
  } from '#cogs/components/field'

  export type TextareaProps = CogsTypes.Components.Field.Textarea.TextareaProps

  export default class TextareaField<P extends TextareaProps> extends ValueField<P> {
    handleChange (event: ChangeEvent<HTMLTextAreaElement>): void
  }
}

declare module '@modernpoacher/cogs/cogs/textarea/field' {
  export { default } from '#cogs/cogs/textarea/field'
  export * from '#cogs/cogs/textarea/field'
}
