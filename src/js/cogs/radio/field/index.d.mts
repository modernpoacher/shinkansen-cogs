declare module '#cogs/cogs/radio/field' {
  import {
    CheckField
  } from '#cogs/components/field'

  export type RadioProps = CogsTypes.Components.Field.Radio.RadioProps

  export default class RadioField<P extends RadioProps> extends CheckField<P> {}
}

declare module '@modernpoacher/cogs/cogs/radio/field' {
  export { default } from '#cogs/cogs/radio/field'
  export * from '#cogs/cogs/radio/field'
}
