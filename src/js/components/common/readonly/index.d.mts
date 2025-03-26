declare module '#cogs/components/common/readonly' {
  import type React from 'react'

  export default function ReadOnly (): React.JSX.Element
}

declare module '@modernpoacher/cogs/components/common/readonly' {
  export { default } from '#cogs/components/common/readonly'
}
