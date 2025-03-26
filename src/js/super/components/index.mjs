import debug from 'debug'

const log = debug('@modernpoacher/cogs/super/components')

log('`cogs` is awake')

export { default as Description } from './description/index.cjs'
export { default as ErrorMessage } from './error-message/index.cjs'
export { default as Field } from './field/index.cjs'
export { default as Title } from './title/index.cjs'
