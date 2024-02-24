declare module '@modernpoacher/cogs/cogs' {
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
    onChange: CogsTypes.OnChangeType
    fieldRef: object
  }

  export default class Cog extends React.Component<CogProps> {}
}
