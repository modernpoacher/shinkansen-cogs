require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/components/common/readonly')

log('`shinkansen` is awake')

const {
  default: Required // @ts-expect-error
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Required
