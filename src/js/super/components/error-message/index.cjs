require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/cogs/super/components/error-message')

log('`cogs` is awake')

const {
  default: ErrorMessage
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = ErrorMessage
