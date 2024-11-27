declare module '#cogs/cogs/textarea/field' {
  import Field from '#cogs/components/field'

  export default class TextareaField extends Field {}
}

declare module 'shinkansen-cogs/cogs/textarea/field' {
  export { default } from '#cogs/cogs/textarea/field'
}
