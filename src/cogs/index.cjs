require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/cogs/cogs')

log('`cogs` is awake')

/**
 *  Has default export, etc
 */
module.exports = require('./index.jsx')
