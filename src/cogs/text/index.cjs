require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/cogs/text')

log('`shinkansen` is awake')

const {
  default: Text // @ts-expect-error
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Text
