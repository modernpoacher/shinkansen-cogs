declare module '#cogs/cogs/radio' {
  import {
    CheckCog
  } from '#cogs/cogs'

  export type RadioProps = CogsTypes.Cogs.Cog.Radio.RadioProps

  export default class RadioCog<P extends RadioProps> extends CheckCog<P> {
    handleChange (
      name: string,
      value?: string | string[],
      checked?: boolean
    ): void

    handleClick (
      name: string,
      value?: string | string[],
      checked?: boolean
    ): void
  }
}

declare module 'shinkansen-cogs/cogs/radio' {
  export { default } from '#cogs/cogs/radio'
  export * from '#cogs/cogs/radio'
}
