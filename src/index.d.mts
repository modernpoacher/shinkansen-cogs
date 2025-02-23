declare module '#cogs' {
  export type ErrorDefinitionType = CogsTypes.ErrorDefinitionType
  export type FieldErrorType = CogsTypes.FieldErrorType

  export { default as CheckboxCog } from '#cogs/cogs/checkbox'
  export { default as EmailCog } from '#cogs/cogs/email'
  export { default as NumberCog } from '#cogs/cogs/number'
  export { default as PasswordCog } from '#cogs/cogs/password'
  export { default as RadioCog } from '#cogs/cogs/radio'
  export { default as SelectCog } from '#cogs/cogs/select'
  export { default as TextCog } from '#cogs/cogs/text'
  export { default as TextareaCog } from '#cogs/cogs/textarea'
}

declare module 'shinkansen-cogs' {
  export * from '#cogs'
}
