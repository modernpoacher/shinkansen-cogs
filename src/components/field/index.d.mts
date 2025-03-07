declare module '#cogs/components/field' {
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
    onChange: CogsTypes.onEventType
    fieldRef: object
  }

  export default class Field extends React.Component<FieldProps> {}
}

declare module '@modernpoacher/cogs/components/field' {
  export { default } from '#cogs/components/field'
  export * from '#cogs/components/field'
}
