require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/components/field')

log('`shinkansen` is awake')

const {
  ValueField,
  CheckField // @ts-expect-error
} = require('./index.jsx')

/**
 *  Exports ValueField and CheckField
 */
module.exports.ValueField = ValueField
module.exports.CheckField = CheckField
