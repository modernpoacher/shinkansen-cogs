declare module '#cogs/cogs/email/field' {
  import {
    ValueField
  } from '#cogs/components/field'

  export type EmailProps = CogsTypes.Components.Field.Email.EmailProps

  export default class EmailField<P extends EmailProps> extends ValueField<P> {}
}

declare module '@modernpoacher/cogs/cogs/email/field' {
  export { default } from '#cogs/cogs/email/field'
  export * from '#cogs/cogs/email/field'
}
