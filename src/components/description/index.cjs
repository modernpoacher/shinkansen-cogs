require('@babel/register')({ ignore: [/node_modules/], configFile: require.resolve('../../../babel.config.cjs') })

const debug = require('debug')

const log = debug('shinkansen-cogs/components/description')

log('`shinkansen` is awake')

module.exports = require('./index.jsx')
