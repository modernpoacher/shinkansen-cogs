require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/components/common/readonly')

log('`shinkansen` is awake')

const {
  default: ReadOnly // @ts-expect-error
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = ReadOnly
