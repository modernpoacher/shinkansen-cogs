declare module '#cogs/cogs/email/title' {
  import Title from '#cogs/components/title'

  export default class EmailTitle extends Title {}
}

declare module 'shinkansen-cogs/cogs/email/title' {
  export { default } from '#cogs/cogs/email/title'
}
