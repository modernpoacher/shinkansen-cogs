require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/cogs/super/components/field')

log('`cogs` is awake')

const {
  default: Field
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Field
