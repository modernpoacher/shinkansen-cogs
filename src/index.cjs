require('@babel/register')({ ignore: [/node_modules/], configFile: require.resolve('../babel.config.cjs') })

const debug = require('debug')

const log = debug('shinkansen-cogs')

log('`shinkansen` is awake')

const { default: CheckboxCog } = require('./cogs/checkbox/index.cjs')
const { default: EmailCog } = require('./cogs/email/index.cjs')
const { default: NumberCog } = require('./cogs/number/index.cjs')
const { default: PasswordCog } = require('./cogs/password/index.cjs')
const { default: RadioCog } = require('./cogs/radio/index.cjs')
const { default: SelectCog } = require('./cogs/select/index.cjs')
const { default: TextCog } = require('./cogs/text/index.cjs')
const { default: TextareaCog } = require('./cogs/textarea/index.cjs')

module.exports.CheckboxCog = CheckboxCog
module.exports.EmailCog = EmailCog
module.exports.NumberCog = NumberCog
module.exports.PasswordCog = PasswordCog
module.exports.RadioCog = RadioCog
module.exports.SelectCog = SelectCog
module.exports.TextCog = TextCog
module.exports.TextareaCog = TextareaCog
