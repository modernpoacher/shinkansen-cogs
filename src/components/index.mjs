import debug from 'debug'

const log = debug('shinkansen-cogs/components')

log('`shinkansen` is awake')

export * as Description from './description/index.cjs'
export * as ErrorMessage from './error-message/index.cjs'
export * as Field from './field/index.cjs'
export * as Title from './title/index.cjs'
