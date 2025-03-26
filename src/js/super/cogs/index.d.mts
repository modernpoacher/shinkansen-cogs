declare module '#cogs/super/cogs' {
  import React from 'react'

  export type CogProps = CogsTypes.Super.Cogs.CogProps

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
}

declare module '@modernpoacher/cogs/super/cogs' {
  export { default } from '#cogs/super/cogs'
  export * from '#cogs/super/cogs'
}
