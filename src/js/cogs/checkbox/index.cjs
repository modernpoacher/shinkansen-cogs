require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/cogs/checkbox')

log('`shinkansen` is awake')

const {
  default: Checkbox // @ts-expect-error
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Checkbox
