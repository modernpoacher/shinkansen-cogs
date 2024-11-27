declare module '#cogs/cogs/checkbox/field' {
  import Field from '#cogs/components/field'

  export default class CheckboxField extends Field {}
}

declare module 'shinkansen-cogs/cogs/checkbox/field' {
  export { default } from '#cogs/cogs/checkbox/field'
}
