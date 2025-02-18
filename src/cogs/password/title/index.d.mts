declare module '#cogs/cogs/password/title' {
  import Title from '#cogs/components/title'

  type PasswordProps = CogsTypes.Components.Title.Password.PasswordProps

  export default class PasswordTitle<P extends PasswordProps> extends Title<P> {}
}

declare module 'shinkansen-cogs/cogs/password/title' {
  export type PasswordProps = CogsTypes.Components.Title.Password.PasswordProps

  export { default } from '#cogs/cogs/password/title'
}
