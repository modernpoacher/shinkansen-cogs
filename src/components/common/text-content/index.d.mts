declare module '@modernpoacher/cogs/components/common/text-content' {
  import type React from 'react'

  export interface TextContentProps {
    textContent: string
  }

  export default function TextContent (props: TextContentProps): React.JSX.Element
}
