require('@babel/register')({ configFile: require.resolve('../../babel.config.cjs') })

const debug = require('debug')

const log = debug('shinkansen-cogs/cogs')

log('`cogs` is awake')

module.exports = require('./index.jsx')
