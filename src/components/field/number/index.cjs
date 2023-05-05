require('@babel/register')

const debug = require('debug')

const log = debug('shinkansen-cogs/components/field/number')

log('`shinkansen` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component
