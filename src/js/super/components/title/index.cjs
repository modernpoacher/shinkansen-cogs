require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/super/components/title')

log('`shinkansen` is awake')

const {
  default: Title
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Title
