declare module '#cogs/components/common/text-content' {
  import type React from 'react'

  export type TextContentProps = CogsTypes.Components.Common.TextContent.TextContentProps

  export default function TextContent (props: TextContentProps): React.JSX.Element | null
}

declare module '@modernpoacher/cogs/components/common/text-content' {
  export { default } from '#cogs/components/common/text-content'
  export * from '#cogs/components/common/text-content'
}
