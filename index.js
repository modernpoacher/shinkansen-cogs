const debug = require('debug')

const log = debug('shinkansen:cogs')

log('`cogs` is awake')

module.exports = require('./lib')
