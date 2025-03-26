require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/cogs/super/components/description')

log('`cogs` is awake')

const {
  default: Description
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Description
