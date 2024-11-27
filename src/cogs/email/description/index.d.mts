declare module '#cogs/cogs/email/description' {
  import Description from '#cogs/components/description'

  export default class EmailDescription extends Description {}
}

declare module '@modernpoacher/cogs/cogs/email/description' {
  export { default } from '#cogs/cogs/email/description'
}
