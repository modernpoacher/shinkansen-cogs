declare module '#cogs/cogs/radio/field' {
  import {
    CheckField
  } from '#cogs/components/field'

  type RadioProps = CogsTypes.Components.Field.Radio.RadioProps

  export default class RadioField<P extends RadioProps> extends CheckField<P> {}
}

declare module 'shinkansen-cogs/cogs/radio/field' {
  export type RadioProps = CogsTypes.Components.Field.Radio.RadioProps

  export { default } from '#cogs/cogs/radio/field'
}
