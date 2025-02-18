require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/cogs')

log('`shinkansen` is awake')

/**
 *  Has default export, etc
 */
// @ts-ignore
module.exports = require('./index.jsx')
