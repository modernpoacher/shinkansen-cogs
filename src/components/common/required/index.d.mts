declare module '#cogs/components/common/required' {
  import type React from 'react'

  export default function Required (): React.JSX.Element
}

declare module 'shinkansen-cogs/components/common/required' {
  export { default } from '#cogs/components/common/required'
}
