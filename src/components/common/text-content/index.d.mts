declare module '#cogs/components/common/text-content' {
  import type React from 'react'

  export interface TextContentProps {
    textContent: string
  }

  export default function TextContent (props: TextContentProps): React.JSX.Element | null
}

declare module '@modernpoacher/cogs/components/common/text-content' {
  export { default } from '#cogs/components/common/text-content'
  export * from '#cogs/components/common/text-content'
}
