require('@babel/register')({ ignore: [] })

const debug = require('debug')

const log = debug('shinkansen-cogs/components/common/readonly')

log('`shinkansen` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component
