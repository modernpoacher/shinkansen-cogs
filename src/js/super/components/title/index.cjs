require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/cogs/super/components/title')

log('`cogs` is awake')

const {
  default: Title
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Title
