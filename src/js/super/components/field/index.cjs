require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/super/components/field')

log('`shinkansen` is awake')

const {
  default: Field
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Field // require('./index.jsx') // component
