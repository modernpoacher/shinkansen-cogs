require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/cogs/textarea')

log('`shinkansen` is awake')

const {
  default: Textarea // @ts-expect-error
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Textarea
