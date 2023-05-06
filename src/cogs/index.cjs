require('@babel/register')({ ignore: [] })

const debug = require('debug')

const log = debug('shinkansen-cogs/cogs')

log('`shinkansen` is awake')

/**
 *  Has default export, etc
 */
module.exports = require('./index.jsx')
