declare module '#cogs/cogs/number/field' {
  import Field from '#cogs/components/field'

  export default class NumberField extends Field {}
}

declare module 'shinkansen-cogs/cogs/number/field' {
  export { default } from '#cogs/cogs/number/field'
}
