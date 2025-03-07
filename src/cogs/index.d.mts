declare module '#cogs/cogs' {
  import React from 'react'

  export interface CogProps {
    id: string
    name: string
    title: string
    description: string
    errorMessage: CogsTypes.ErrorDefinitionType
    required: boolean
    disabled: boolean
    readOnly: boolean
    placeholder: string
    onChange: CogsTypes.onEventType
    fieldRef: object
  }

  export default class Cog extends React.Component<CogProps> {}
}

declare module '@modernpoacher/cogs/cogs' {
  export { default } from '#cogs/cogs'
  export * from '#cogs/cogs'
}
