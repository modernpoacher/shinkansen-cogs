declare module '#cogs/super/components/description' {
  import React from 'react'

  export type DescriptionProps = CogsTypes.Super.Components.Description.DescriptionProps

  export default class Description extends React.Component<DescriptionProps> {
    static propTypes: object

    getClassName (): string

    shouldComponentUpdate (props: DescriptionProps): boolean
  }
}

declare module '@modernpoacher/cogs/super/components/description' {
  export { default } from '#cogs/super/components/description'
  export * from '#cogs/super/components/description'
}
