declare module '#cogs/cogs/text' {
  import Cog from '#cogs/cogs'

  export default class TextCog extends Cog {}
}

declare module 'shinkansen-cogs/cogs/text' {
  export { default } from '#cogs/cogs/text'
}
