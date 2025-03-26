require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/cogs/cogs')

log('`cogs` is awake')

const {
  ValueCog,
  CheckCog,
  toInputValue
} = require('./index.jsx')

module.exports.ValueCog = ValueCog
module.exports.CheckCog = CheckCog
module.exports.toInputValue = toInputValue
