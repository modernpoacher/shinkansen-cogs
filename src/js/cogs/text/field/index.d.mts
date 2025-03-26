declare module '#cogs/cogs/text/field' {
  import {
    ValueField
  } from '#cogs/components/field'

  export type TextProps = CogsTypes.Components.Field.Text.TextProps

  export default class TextField<P extends TextProps> extends ValueField<P> {}
}

declare module '@modernpoacher/cogs/cogs/text/field' {
  export { default } from '#cogs/cogs/text/field'
  export * from '#cogs/cogs/text/field'
}
