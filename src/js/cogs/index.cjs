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
  CheckCog // @ts-expect-error
} = require('./index.jsx')

module.exports.ValueCog = ValueCog
module.exports.CheckCog = CheckCog
