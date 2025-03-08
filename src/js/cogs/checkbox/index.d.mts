declare module '#cogs/cogs/checkbox' {
  import {
    CheckCog
  } from '#cogs/cogs'

  export type CheckboxProps = CogsTypes.Cogs.Checkbox.CheckboxProps

  export default class CheckboxCog<P extends CheckboxProps> extends CheckCog<P> {
    handleChange (
      name: string,
      value?: string | string[],
      checked?: boolean
    ): void

    handleClick (
      name: string,
      value?: string | string[],
      checked?: boolean
    ): void
  }
}

declare module 'shinkansen-cogs/cogs/checkbox' {
  export { default } from '#cogs/cogs/checkbox'
  export * from '#cogs/cogs/checkbox'
}
