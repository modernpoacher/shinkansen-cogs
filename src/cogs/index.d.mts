declare module '#cogs/cogs' {
  import Cog from '#cogs/super/cogs'

  export type CogProps = CogsTypes.Super.Cogs.CogProps
  export type ValueProps = CogsTypes.Cogs.ValueProps
  export type CheckProps = CogsTypes.Cogs.CheckProps

  export class ValueCog<P extends ValueProps> extends Cog<P> {
    shouldComponentUpdate (props: ValueProps): boolean
  }

  export class CheckCog<P extends CheckProps> extends Cog<P> {
    shouldComponentUpdate (props: CheckProps): boolean
  }
}

declare module 'shinkansen-cogs/cogs' {
  export * from '#cogs/cogs'
}
