declare module '#cogs/cogs/email/field' {
  import Field from '#cogs/components/field'

  export default class EmailField extends Field {}
}

declare module 'shinkansen-cogs/cogs/email/field' {
  export { default } from '#cogs/cogs/email/field'
}
