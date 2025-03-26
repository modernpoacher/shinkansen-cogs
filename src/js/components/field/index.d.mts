declare module '#cogs/components/field' {
  import type { MouseEvent } from 'react'

  import Field from '#cogs/super/components/field'

  export function toInputValue (value: unknown): string

  export type ValueProps = CogsTypes.Components.Field.ValueProps
  export type CheckProps = CogsTypes.Components.Field.CheckProps

  export class ValueField<P extends ValueProps> extends Field<P> {
    shouldComponentUpdate (props: ValueProps): boolean
  }

  export class CheckField<P extends CheckProps> extends Field<P> {
    shouldComponentUpdate (props: CheckProps): boolean

    handleClick (event: MouseEvent<HTMLInputElement>): void
  }
}

declare module '@modernpoacher/cogs/components/field' {
  export * from '#cogs/components/field'
}
