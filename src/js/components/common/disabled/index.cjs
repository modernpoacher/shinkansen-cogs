require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/cogs/components/common/disabled')

log('`cogs` is awake')

const {
  default: Disabled
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Disabled
