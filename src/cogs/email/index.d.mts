declare module '#cogs/cogs/email' {
  import Cog from '#cogs/cogs'

  export default class EmailCog extends Cog {}
}

declare module 'shinkansen-cogs/cogs/email' {
  export { default } from '#cogs/cogs/email'
}
