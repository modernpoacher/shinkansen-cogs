require('@babel/register')({ configFile: require.resolve('../babel.config.cjs') })

const debug = require('debug')

const log = debug('shinkansen-cogs')

log('`cogs` is awake')

const { default: CheckboxCog } = require('./cogs/checkbox')
const { default: EmailCog } = require('./cogs/email')
const { default: NumberCog } = require('./cogs/number')
const { default: PasswordCog } = require('./cogs/password')
const { default: RadioCog } = require('./cogs/radio')
const { default: SelectCog } = require('./cogs/select')
const { default: TextCog } = require('./cogs/text')
const { default: TextareaCog } = require('./cogs/textarea')

module.exports.CheckboxCog = CheckboxCog
module.exports.EmailCog = EmailCog
module.exports.NumberCog = NumberCog
module.exports.PasswordCog = PasswordCog
module.exports.RadioCog = RadioCog
module.exports.SelectCog = SelectCog
module.exports.TextCog = TextCog
module.exports.TextareaCog = TextareaCog
