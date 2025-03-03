require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/components/common/disabled')

log('`shinkansen` is awake')

const {
  default: Disabled // @ts-expect-error
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Disabled
