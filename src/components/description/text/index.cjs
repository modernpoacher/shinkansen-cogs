require('@babel/register')({ ignore: [/node_modules/], configFile: require.resolve('../../../../babel.config.cjs') })

const debug = require('debug')

const log = debug('shinkansen-cogs/components/description/text')

log('`shinkansen` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component
