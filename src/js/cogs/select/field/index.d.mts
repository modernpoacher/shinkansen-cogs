declare module '#cogs/cogs/select/field' {
  import type { ChangeEvent } from 'react'

  import {
    ValueField
  } from '#cogs/components/field'

  export type SelectProps = CogsTypes.Components.Field.Select.SelectProps

  export default class SelectField<P extends SelectProps> extends ValueField<P> {
    handleChange (event: ChangeEvent<HTMLSelectElement>): void
  }
}

declare module '@modernpoacher/cogs/cogs/select/field' {
  export { default } from '#cogs/cogs/select/field'
  export * from '#cogs/cogs/select/field'
}
