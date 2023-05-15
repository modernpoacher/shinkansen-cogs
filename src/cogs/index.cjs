require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen-)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/cogs')

log('`shinkansen` is awake')

/**
 *  Has default export, etc
 */
module.exports = require('./index.jsx')
