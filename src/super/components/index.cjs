require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-cogs/super/components')

log('`shinkansen` is awake')

const {
  default: Description // @ts-expect-error
} = require('./description/index.jsx')

const {
  default: ErrorMessage // @ts-expect-error
} = require('./error-message/index.jsx')

const {
  default: Field // @ts-expect-error
} = require('./field/index.jsx')

const {
  default: Title // @ts-expect-error
} = require('./title/index.jsx')

module.exports.Description = Description // require('./description/index.cjs')
module.exports.ErrorMessage = ErrorMessage // require('./error-message/index.cjs')
module.exports.Field = Field // require('./field/index.cjs')
module.exports.Title = Title // require('./title/index.cjs')
