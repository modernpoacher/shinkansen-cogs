declare module '#cogs/common' {
  export function DEFAULT_HANDLE_CHANGE (): void

  export function DEFAULT_HANDLE_CLICK (): void
}

declare module '@modernpoacher/cogs/common' {
  export * from '#cogs/common'
}
