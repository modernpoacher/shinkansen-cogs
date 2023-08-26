require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/cogs/components/title')

log('`cogs` is awake')

const {
  default: component
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = component
