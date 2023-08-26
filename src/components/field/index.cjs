require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/cogs/components/field')

log('`cogs` is awake')

/**
 *  Exports default, etc
 */
module.exports = require('./index.jsx')
