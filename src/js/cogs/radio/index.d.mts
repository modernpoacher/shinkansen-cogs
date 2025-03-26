declare module '#cogs/cogs/radio' {
  import {
    CheckCog
  } from '#cogs/cogs'

  export type RadioProps = CogsTypes.Cogs.Radio.RadioProps

  export default class RadioCog<P extends RadioProps> extends CheckCog<P> {
    handleChange (
      value?: string | string[],
      checked?: boolean
    ): void

    handleClick (
      value?: string | string[],
      checked?: boolean
    ): void
  }
}

declare module '@modernpoacher/cogs/cogs/radio' {
  export { default } from '#cogs/cogs/radio'
  export * from '#cogs/cogs/radio'
}
