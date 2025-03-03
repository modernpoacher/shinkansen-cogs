declare module '#cogs/super/components/title' {
  import React from 'react'

  export type TitleProps = CogsTypes.Super.Components.Title.TitleProps

  export default class Title<P extends TitleProps> extends React.Component<P> {
    static propTypes: object

    isRequired (): boolean

    isDisabled (): boolean

    isReadOnly (): boolean

    getClassName (): string

    shouldComponentUpdate (props: TitleProps): boolean

    renderIsRequired (): React.JSX.Element | null

    renderIsDisabled (): React.JSX.Element | null

    renderIsReadOnly (): React.JSX.Element | null
  }
}

declare module 'shinkansen-cogs/super/components/title' {
  export { default } from '#cogs/super/components/title'
  export * from '#cogs/super/components/title'
}
