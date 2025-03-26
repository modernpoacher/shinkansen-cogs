declare module '#cogs/cogs/password/title' {
  import Title from '#cogs/components/title'

  export type PasswordProps = CogsTypes.Components.Title.Password.PasswordProps

  export default class PasswordTitle<P extends PasswordProps> extends Title<P> {}
}

declare module '@modernpoacher/cogs/cogs/password/title' {
  export { default } from '#cogs/cogs/password/title'
  export * from '#cogs/cogs/password/title'
}
