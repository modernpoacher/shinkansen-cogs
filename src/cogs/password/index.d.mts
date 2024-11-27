declare module '#cogs/cogs/password' {
  import Cog from '#cogs/cogs'

  export default class PasswordCog extends Cog {}
}

declare module 'shinkansen-cogs/cogs/password' {
  export { default } from '#cogs/cogs/password'
}
