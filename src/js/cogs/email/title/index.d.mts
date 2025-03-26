declare module '#cogs/cogs/email/title' {
  import Title from '#cogs/components/title'

  export type EmailProps = CogsTypes.Components.Title.Email.EmailProps

  export default class EmailTitle<P extends EmailProps> extends Title<P> {}
}

declare module '@modernpoacher/cogs/cogs/email/title' {
  export { default } from '#cogs/cogs/email/title'
  export * from '#cogs/cogs/email/title'
}
