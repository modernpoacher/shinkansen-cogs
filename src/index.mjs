import debug from 'debug'

import CheckboxCog from './cogs/checkbox/index.cjs'
import EmailCog from './cogs/email/index.cjs'
import NumberCog from './cogs/number/index.cjs'
import PasswordCog from './cogs/password/index.cjs'
import RadioCog from './cogs/radio/index.cjs'
import SelectCog from './cogs/select/index.cjs'
import TextCog from './cogs/text/index.cjs'
import TextareaCog from './cogs/textarea/index.cjs'

const log = debug('@modernpoacher/cogs')

log('`cogs` is awake')

export { default as CheckboxCog } from './cogs/checkbox/index.cjs'
export { default as EmailCog } from './cogs/email/index.cjs'
export { default as NumberCog } from './cogs/number/index.cjs'
export { default as PasswordCog } from './cogs/password/index.cjs'
export { default as RadioCog } from './cogs/radio/index.cjs'
export { default as SelectCog } from './cogs/select/index.cjs'
export { default as TextCog } from './cogs/text/index.cjs'
export { default as TextareaCog } from './cogs/textarea/index.cjs'

export default {
  CheckboxCog,
  EmailCog,
  NumberCog,
  PasswordCog,
  RadioCog,
  SelectCog,
  TextCog,
  TextareaCog
}
