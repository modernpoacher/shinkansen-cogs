declare module '#cogs/components/common/text-content' {
  import type React from 'react'

  type TextContentProps = CogsTypes.Components.Common.TextContent.TextContentProps

  export default function TextContent (props: TextContentProps): React.JSX.Element | null
}

declare module 'shinkansen-cogs/components/common/text-content' {
  export type TextContentProps = CogsTypes.Components.Common.TextContent.TextContentProps

  export { default } from '#cogs/components/common/text-content'
}
