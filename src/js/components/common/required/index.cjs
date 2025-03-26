require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/cogs/components/common/readonly')

log('`cogs` is awake')

const {
  default: Required
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Required
