require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/cogs/number')

log('`shinkansen` is awake')

const {
  default: Number
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Number
