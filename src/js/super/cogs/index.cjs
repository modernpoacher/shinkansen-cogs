require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/cogs/super/cogs')

log('`cogs` is awake')

const {
  default: Cog
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Cog
