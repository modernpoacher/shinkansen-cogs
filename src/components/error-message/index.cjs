require('@babel/register')({ configFile: require.resolve('../../../babel.config.cjs') })

const debug = require('debug')

const log = debug('shinkansen-cogs/components/error-message')

log('`shinkansen` is awake')

module.exports = require('./index.jsx')