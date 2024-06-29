declare namespace CogsTypes {
  export type OnChangeType = () => void

  export interface ErrorDefinitionType {
    type: string
    uri: string
    params: {
      expectedType: string
    }
  }

  export interface FieldErrorType {
    text: string
    href: string
  }
}

declare module 'shinkansen-cogs' {
  export { default as CheckboxCog } from 'shinkansen-cogs/cogs/checkbox'
  export { default as EmailCog } from 'shinkansen-cogs/cogs/email'
  export { default as NumberCog } from 'shinkansen-cogs/cogs/number'
  export { default as PasswordCog } from 'shinkansen-cogs/cogs/password'
  export { default as RadioCog } from 'shinkansen-cogs/cogs/radio'
  export { default as SelectCog } from 'shinkansen-cogs/cogs/select'
  export { default as TextCog } from 'shinkansen-cogs/cogs/text'
  export { default as TextareaCog } from 'shinkansen-cogs/cogs/textarea'
}
