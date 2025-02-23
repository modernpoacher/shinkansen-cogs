declare module '#cogs/transformers/error-message' {
  export type ErrorDefinitionType = CogsTypes.ErrorDefinitionType

  export type FieldErrorType = CogsTypes.FieldErrorType

  export default function transform (error: CogsTypes.ErrorDefinitionType): CogsTypes.FieldErrorType
}

declare module 'shinkansen-cogs/transformers/error-message' {
  export { default } from '#cogs/transformers/error-message'
  export * from '#cogs/transformers/error-message'
}
