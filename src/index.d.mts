declare namespace CogsTypes {
  export type OnChangeType = () => void

  export interface ErrorDefinitionType {
    type: string
    uri: string
    params: {
      expectedType: string
    }
  }
}

declare module '@modernpoacher/cogs/cogs/textarea/title' {
  import Title from '@modernpoacher/cogs/components/title'

  export default class TextareaTitle extends Title {}
}

declare module '@modernpoacher/cogs' {
  export { default as CheckboxCog } from '@modernpoacher/cogs/cogs/checkbox'
  export { default as EmailCog } from '@modernpoacher/cogs/cogs/email'
  export { default as NumberCog } from '@modernpoacher/cogs/cogs/number'
  export { default as PasswordCog } from '@modernpoacher/cogs/cogs/password'
  export { default as RadioCog } from '@modernpoacher/cogs/cogs/radio'
  export { default as SelectCog } from '@modernpoacher/cogs/cogs/select'
  export { default as TextCog } from '@modernpoacher/cogs/cogs/text'
  export { default as TextareaCog } from '@modernpoacher/cogs/cogs/textarea'
}
