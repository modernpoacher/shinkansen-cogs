declare module '#cogs/components/error-message' {
  import React from 'react'

  export type ErrorMessageProps = CogsTypes.ErrorDefinitionType

  export default class ErrorMessage extends React.Component<ErrorMessageProps> {}
}

declare module '@modernpoacher/cogs/components/error-message' {
  export { default } from '#cogs/components/error-message'
  export * from '#cogs/components/error-message'
}
