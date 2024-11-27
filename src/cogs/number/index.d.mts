declare module '#cogs/cogs/number' {
  import Cog from '#cogs/cogs'

  export default class NumberCog extends Cog {}
}

declare module 'shinkansen-cogs/cogs/number' {
  export { default } from '#cogs/cogs/number'
}
