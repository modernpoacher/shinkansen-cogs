declare module '#cogs/cogs/radio/field' {
  import Field from '#cogs/components/field'

  export default class RadioField extends Field {}
}

declare module 'shinkansen-cogs/cogs/radio/field' {
  export { default } from '#cogs/cogs/radio/field'
}
