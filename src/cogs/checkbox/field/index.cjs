require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/cogs/components/field/checkbox')

log('`cogs` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component
