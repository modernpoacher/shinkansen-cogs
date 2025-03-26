require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/cogs')

log('`cogs` is awake')

const CheckboxCog = require('./cogs/checkbox/index.cjs')
const EmailCog = require('./cogs/email/index.cjs')
const NumberCog = require('./cogs/number/index.cjs')
const PasswordCog = require('./cogs/password/index.cjs')
const RadioCog = require('./cogs/radio/index.cjs')
const SelectCog = require('./cogs/select/index.cjs')
const TextCog = require('./cogs/text/index.cjs')
const TextareaCog = require('./cogs/textarea/index.cjs')

module.exports.CheckboxCog = CheckboxCog
module.exports.EmailCog = EmailCog
module.exports.NumberCog = NumberCog
module.exports.PasswordCog = PasswordCog
module.exports.RadioCog = RadioCog
module.exports.SelectCog = SelectCog
module.exports.TextCog = TextCog
module.exports.TextareaCog = TextareaCog
