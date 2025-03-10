require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/cogs')

log('`shinkansen` is awake')

const {
  ValueCog,
  CheckCog,
  toInputValue
} = require('./index.jsx')

module.exports.ValueCog = ValueCog
module.exports.CheckCog = CheckCog
module.exports.toInputValue = toInputValue
