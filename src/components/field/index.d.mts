declare module '#cogs/components/field' {
  import React, { type ChangeEvent, type MouseEvent } from 'react'

  export type FieldProps = CogsTypes.Components.Field.FieldProps
  export type ValueProps = CogsTypes.Components.Field.ValueProps
  export type CheckProps = CogsTypes.Components.Field.CheckProps

  export default class Field<P extends FieldProps> extends React.Component<P> {
    static propTypes: object

    getClassName (): string

    shouldComponentUpdate (props: FieldProps): boolean
  }

  export class ValueField<P extends ValueProps> extends Field<P> {
    shouldComponentUpdate (props: ValueProps): boolean

    handleChange (event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>): void
  }

  export class CheckField<P extends CheckProps> extends Field<P> {
    shouldComponentUpdate (props: CheckProps): boolean

    handleChange (event: ChangeEvent<HTMLInputElement>): void

    handleClick (event: MouseEvent<HTMLInputElement>): void
  }
}

declare module 'shinkansen-cogs/components/field' {
  export { default } from '#cogs/components/field'
  export * from '#cogs/components/field'
}
