require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/cogs/radio/error-message')

log('`shinkansen` is awake')

const {
  default: ErrorMessage
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = ErrorMessage
