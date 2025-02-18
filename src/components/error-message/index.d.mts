declare module '#cogs/components/error-message' {
  import React from 'react'

  type ErrorDefinitionType = CogsTypes.ErrorDefinitionType
  type ErrorMessageProps = CogsTypes.Components.ErrorMessage.ErrorMessageProps
  type ErrorMessageState = CogsTypes.Components.ErrorMessage.ErrorMessageState

  export default class ErrorMessage extends React.Component<ErrorMessageProps, ErrorMessageState> {
    static propTypes: object

    hasTextContent (): boolean

    getTextContent (): string

    getClassName (): string

    static getDerivedStateFromProps (props: ErrorMessageProps, state: ErrorMessageState): ErrorMessageState

    shouldComponentUpdate (props: ErrorMessageProps, state: ErrorMessageState): boolean

    renderTextContent (): React.JSX.Element | null
  }
}

declare module 'shinkansen-cogs/components/error-message' {
  export type ErrorDefinitionType = CogsTypes.ErrorDefinitionType
  export type ErrorMessageProps = CogsTypes.Components.ErrorMessage.ErrorMessageProps
  export type ErrorMessageState = CogsTypes.Components.ErrorMessage.ErrorMessageState

  export { default } from '#cogs/components/error-message'
}
