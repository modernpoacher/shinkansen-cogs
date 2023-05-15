require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen-)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/components/common/text-content')

log('`shinkansen` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component
