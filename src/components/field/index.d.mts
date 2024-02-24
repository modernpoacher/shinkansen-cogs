declare module 'shinkansen-cogs/components/field' {
  import React from 'react'

  export interface FieldProps {
    id: string
    name: string
    required: boolean
    disabled: boolean
    readOnly: boolean
    tabIndex: number
    accessKey: string
    placeholder: string
    onChange: CogsTypes.OnChangeType
    fieldRef: object
  }

  export default class Field extends React.Component<FieldProps> {}
}
