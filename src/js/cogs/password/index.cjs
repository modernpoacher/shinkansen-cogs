require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/cogs/password')

log('`shinkansen` is awake')

const {
  default: Password
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Password
