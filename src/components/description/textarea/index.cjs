require('@babel/register')({ ignore: [] })

const debug = require('debug')

const log = debug('shinkansen-cogs/components/description/textarea')

log('`shinkansen` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component
