declare module '#cogs/cogs' {
  import React from 'react'

  type CogProps = CogsTypes.Cogs.Cog.CogProps
  type ValueProps = CogsTypes.Cogs.Cog.ValueProps
  type CheckProps = CogsTypes.Cogs.Cog.CheckProps

  export default class Cog<P extends CogProps> extends React.Component<P> {
    static propTypes: Record<PropertyKey, unknown>

    getClassName (): string

    getId (): string

    shouldComponentUpdate (props: CogProps): boolean

    renderTitle (): React.JSX.Element | null

    renderDescription (): React.JSX.Element | null

    renderErrorMessage (): React.JSX.Element | null

    renderField (): React.JSX.Element | null
  }

  export class ValueCog<P extends ValueProps> extends Cog<P> {
    shouldComponentUpdate (props: ValueProps): boolean
  }

  export class CheckCog<P extends CheckProps> extends Cog<P> {
    shouldComponentUpdate (props: CheckProps): boolean
  }
}

declare module 'shinkansen-cogs/cogs' {
  export type CogProps = CogsTypes.Cogs.Cog.CogProps
  export type ValueProps = CogsTypes.Cogs.Cog.ValueProps
  export type CheckProps = CogsTypes.Cogs.Cog.CheckProps

  export { default } from '#cogs/cogs'
  export * from '#cogs/cogs'
}
