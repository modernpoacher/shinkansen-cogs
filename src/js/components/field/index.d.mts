declare module '#cogs/components/field' {
  import type { ChangeEvent, MouseEvent } from 'react'

  import Field from '#cogs/super/components/field'

  export type ValueProps = CogsTypes.Components.Field.ValueProps
  export type CheckProps = CogsTypes.Components.Field.CheckProps

  export class ValueField<P extends ValueProps> extends Field<P> {
    componentDidMount (): void

    shouldComponentUpdate (props: ValueProps): boolean

    componentDidUpdate (): void

    handleFieldRef (): void

    handleChange (event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>): void
  }

  export class CheckField<P extends CheckProps> extends Field<P> {
    componentDidMount (): void

    shouldComponentUpdate (props: CheckProps): boolean

    componentDidUpdate (): void

    handleFieldRef (): void

    handleChange (event: ChangeEvent<HTMLInputElement>): void

    handleClick (event: MouseEvent<HTMLInputElement>): void
  }
}

declare module 'shinkansen-cogs/components/field' {
  export * from '#cogs/components/field'
}
