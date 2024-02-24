declare module '@modernpoacher/cogs/components/description' {
  import React from 'react'

  export interface DescriptionProps {
    description: string
  }

  export default class Description extends React.Component<DescriptionProps> {}
}
