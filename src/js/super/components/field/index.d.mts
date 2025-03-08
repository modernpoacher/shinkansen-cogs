declare module '#cogs/super/components/field' {
  import React from 'react'

  export type FieldProps = CogsTypes.Super.Components.Field.FieldProps

  export default class Field<P extends FieldProps> extends React.Component<P> {
    static propTypes: object

    getClassName (): string

    shouldComponentUpdate (props: FieldProps): boolean
  }
}

declare module 'shinkansen-cogs/super/components/field' {
  export { default } from '#cogs/super/components/field'
  export * from '#cogs/super/components/field'
}
