declare module '#cogs/components/description' {
  import React from 'react'

  export interface DescriptionProps {
    description: string
  }

  export default class Description extends React.Component<DescriptionProps> {}
}

declare module '@modernpoacher/cogs/components/description' {
  export { default } from '#cogs/components/description'
  export * from '#cogs/components/description'
}
