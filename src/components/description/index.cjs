require('@babel/register')

const debug = require('debug')

const log = debug('shinkansen-cogs/components/description')

log('`shinkansen` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component
