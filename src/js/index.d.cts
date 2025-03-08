import type CheckboxCog from '#cogs/cogs/checkbox'

import type {
  CheckboxProps
} from '#cogs/cogs/checkbox'

import type EmailCog from '#cogs/cogs/email'

import type {
  EmailProps
} from '#cogs/cogs/email'

import type NumberCog from '#cogs/cogs/number'

import type {
  NumberProps
} from '#cogs/cogs/number'

import type PasswordCog from '#cogs/cogs/password'

import type {
  PasswordProps
} from '#cogs/cogs/password'

import type RadioCog from '#cogs/cogs/radio'

import type {
  RadioProps
} from '#cogs/cogs/radio'

import type SelectCog from '#cogs/cogs/select'

import type {
  SelectProps
} from '#cogs/cogs/select'

import type TextCog from '#cogs/cogs/text'

import type {
  TextProps
} from '#cogs/cogs/text'

import type TextareaCog from '#cogs/cogs/textarea'

import type {
  TextareaProps
} from '#cogs/cogs/textarea'

export type ErrorDefinitionType = CogsTypes.ErrorDefinitionType
export type FieldErrorType = CogsTypes.FieldErrorType

export { default as CheckboxCog } from '#cogs/cogs/checkbox'
export { default as EmailCog } from '#cogs/cogs/email'
export { default as NumberCog } from '#cogs/cogs/number'
export { default as PasswordCog } from '#cogs/cogs/password'
export { default as RadioCog } from '#cogs/cogs/radio'
export { default as SelectCog } from '#cogs/cogs/select'
export { default as TextCog } from '#cogs/cogs/text'
export { default as TextareaCog } from '#cogs/cogs/textarea'

declare const cogs: {
  CheckboxCog: CheckboxCog<CheckboxProps>
  EmailCog: EmailCog<EmailProps>
  NumberCog: NumberCog<NumberProps>
  PasswordCog: PasswordCog<PasswordProps>
  RadioCog: RadioCog<RadioProps>
  SelectCog: SelectCog<SelectProps>
  TextCog: TextCog<TextProps>
  TextareaCog: TextareaCog<TextareaProps>
}

export default cogs
