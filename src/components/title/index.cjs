require('@babel/register')({ ignore: [] })

const debug = require('debug')

const log = debug('shinkansen-cogs/components/title')

log('`shinkansen` is awake')

const {
  default: component
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = component
