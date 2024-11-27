declare module '#cogs/cogs/password/field' {
  import Field from '#cogs/components/field'

  export default class PasswordField extends Field {}
}

declare module '@modernpoacher/cogs/cogs/password/field' {
  export { default } from '#cogs/cogs/password/field'
}
