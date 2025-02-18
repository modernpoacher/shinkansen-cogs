declare module '#cogs/common' {
  export function DEFAULT_HANDLE_CHANGE (
    name: string,
    value?: string | string[],
    checked?: boolean
  ): void

  export function DEFAULT_HANDLE_CLICK (
    name: string,
    value?: string | string[],
    checked?: boolean
  ): void
}

declare module 'shinkansen-cogs/common' {
  export * from '#cogs/common'
}
