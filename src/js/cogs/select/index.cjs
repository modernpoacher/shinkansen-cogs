require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/cogs/select')

log('`shinkansen` is awake')

const {
  default: Select
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Select
