require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen-)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/components/field')

log('`shinkansen` is awake')

/**
 *  Exports default, etc
 */
module.exports = require('./index.jsx')
