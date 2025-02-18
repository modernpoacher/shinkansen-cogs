declare module '#cogs/components/description' {
  import React from 'react'

  type DescriptionProps = CogsTypes.Components.Description.DescriptionProps

  export default class Description extends React.Component<DescriptionProps> {
    static propTypes: object

    getClassName (): string

    shouldComponentUpdate (props: DescriptionProps): boolean
  }
}

declare module 'shinkansen-cogs/components/description' {
  export type DescriptionProps = CogsTypes.Components.Description.DescriptionProps

  export { default } from '#cogs/components/description'
}
