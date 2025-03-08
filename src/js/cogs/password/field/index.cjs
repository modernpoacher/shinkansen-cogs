require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/cogs/password/field')

log('`shinkansen` is awake')

const {
  default: Field // @ts-expect-error
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Field
