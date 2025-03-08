require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/cogs/radio')

log('`shinkansen` is awake')

const {
  default: Radio // @ts-expect-error
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Radio
