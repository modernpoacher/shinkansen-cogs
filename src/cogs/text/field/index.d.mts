declare module '#cogs/cogs/text/field' {
  import Field from '#cogs/components/field'

  export default class TextField extends Field {}
}

declare module 'shinkansen-cogs/cogs/text/field' {
  export { default } from '#cogs/cogs/text/field'
}
