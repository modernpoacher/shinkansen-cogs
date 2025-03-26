require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/components')

log('`shinkansen` is awake')

const {
  default: Description
} = require('./description/index.jsx')

const {
  default: ErrorMessage
} = require('./error-message/index.jsx')

const {
  ValueField,
  CheckField,
  toInputValue
} = require('./field/index.jsx')

const {
  default: Title
} = require('./title/index.jsx')

module.exports.Description = Description
module.exports.ErrorMessage = ErrorMessage
module.exports.Field = {
  ValueField,
  CheckField,
  toInputValue
}
module.exports.Title = Title
