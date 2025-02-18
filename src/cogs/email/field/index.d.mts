declare module '#cogs/cogs/email/field' {
  import {
    ValueField
  } from '#cogs/components/field'

  type EmailProps = CogsTypes.Components.Field.Email.EmailProps

  export default class EmailField<P extends EmailProps> extends ValueField<P> {}
}

declare module 'shinkansen-cogs/cogs/email/field' {
  export type EmailProps = CogsTypes.Components.Field.Email.EmailProps

  export { default } from '#cogs/cogs/email/field'
}
