require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/super/cogs')

log('`shinkansen` is awake')

const {
  default: Cog // @ts-expect-error
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Cog //  = require('./index.jsx')
