require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/cogs/cogs/text')

log('`cogs` is awake')

const {
  default: Text
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Text
