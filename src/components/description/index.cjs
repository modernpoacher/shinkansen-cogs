require('@babel/register')

const debug = require('debug')

const log = debug('shinkansen-cogs/components/description')

log('`shinkansen` is awake')

module.exports = require('./index.jsx')
