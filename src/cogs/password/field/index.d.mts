declare module '#cogs/cogs/password/field' {
  import {
    ValueField
  } from '#cogs/components/field'

  type PasswordProps = CogsTypes.Components.Field.Password.PasswordProps

  export default class PasswordField<P extends PasswordProps> extends ValueField<P> {}
}

declare module 'shinkansen-cogs/cogs/password/field' {
  export type PasswordProps = CogsTypes.Components.Field.Password.PasswordProps

  export { default } from '#cogs/cogs/password/field'
}
