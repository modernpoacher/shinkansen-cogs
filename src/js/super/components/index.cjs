require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/cogs/super/components')

log('`cogs` is awake')

const {
  default: Description
} = require('./description/index.jsx')

const {
  default: ErrorMessage
} = require('./error-message/index.jsx')

const {
  default: Field
} = require('./field/index.jsx')

const {
  default: Title
} = require('./title/index.jsx')

module.exports.Description = Description // require('./description/index.cjs')
module.exports.ErrorMessage = ErrorMessage // require('./error-message/index.cjs')
module.exports.Field = Field // require('./field/index.cjs')
module.exports.Title = Title // require('./title/index.cjs')
