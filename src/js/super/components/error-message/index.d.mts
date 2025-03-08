declare module '#cogs/super/components/error-message' {
  import React from 'react'

  export type ErrorDefinitionType = CogsTypes.ErrorDefinitionType
  export type ErrorMessageProps = CogsTypes.Super.Components.ErrorMessage.ErrorMessageProps
  export type ErrorMessageState = CogsTypes.Super.Components.ErrorMessage.ErrorMessageState

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

declare module 'shinkansen-cogs/super/components/error-message' {
  export { default } from '#cogs/super/components/error-message'
  export * from '#cogs/super/components/error-message'
}
