declare module '#cogs/cogs/email/title' {
  import Title from '#cogs/components/title'

  type EmailProps = CogsTypes.Components.Title.Email.EmailProps

  export default class EmailTitle<P extends EmailProps> extends Title<P> {}
}

declare module 'shinkansen-cogs/cogs/email/title' {
  export type EmailProps = CogsTypes.Components.Title.Email.EmailProps

  export { default } from '#cogs/cogs/email/title'
}
