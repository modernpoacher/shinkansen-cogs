declare module '#cogs/components/common/disabled' {
  import type React from 'react'

  export default function Disabled (): React.JSX.Element
}

declare module 'shinkansen-cogs/components/common/disabled' {
  export { default } from '#cogs/components/common/disabled'
}
