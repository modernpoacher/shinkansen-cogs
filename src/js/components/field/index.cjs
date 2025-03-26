require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/cogs/components/field')

log('`cogs` is awake')

const {
  ValueField,
  CheckField,
  toInputValue
} = require('./index.jsx')

/**
 *  Exports ValueField and CheckField
 */
module.exports.ValueField = ValueField
module.exports.CheckField = CheckField
module.exports.toInputValue = toInputValue
