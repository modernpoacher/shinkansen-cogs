export interface ErrorDefinitionType {
  type: string
  params: Record<string, unknown>
  uri: string
}

export interface OptionType {
  text: string
  value?: string
  label?: string
  disabled?: boolean
}

export interface OptionGroupType {
  label: string
  disabled?: boolean
  options: readonly OptionType[]
}

export type OptionsType = ReadonlyArray<OptionType | OptionGroupType>

/** Static props; select options replace React children. Callbacks and refs are ignored. */
export interface Props {
  name?: string
  id?: string
  title?: string
  description?: string
  textContent?: string
  value?: string | number | readonly string[] | null
  defaultValue?: string | number | readonly string[] | null
  checked?: boolean
  defaultChecked?: boolean
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
  tabIndex?: number
  accessKey?: string
  placeholder?: string
  multiple?: boolean
  errorMessage?: ErrorDefinitionType | null
  options?: OptionsType
  onChange?: unknown
  onClick?: unknown
  fieldRef?: unknown
}

export interface TextView {
  hasText: boolean
  text: string
}

export interface MarkerView {
  className: string
  text: string
}

export interface TitleView {
  hasTitle: boolean
  className: string
  id: string
  text: string
  required: boolean
  disabled: boolean
  readOnly: boolean
}

export interface DescriptionView {
  hasDescription: boolean
  className: string
  text: string
}

export interface ErrorMessageView {
  hasErrorMessage: boolean
  className: string
  text: string
}

/** Every property is present, so partial lookup cannot inherit absent option fields. */
export interface OptionView {
  isOption: boolean
  isGroup: boolean
  hasValue: boolean
  value: string
  hasLabel: boolean
  label: string
  text: string
  disabled: boolean
  selected: boolean
  options: OptionView[]
}

export interface FieldView {
  className: string
  hasName: boolean
  name: string
  hasId: boolean
  id: string
  hasValue: boolean
  value: string
  hasType: boolean
  type: string
  hasTabIndex: boolean
  tabIndex: string
  hasAccessKey: boolean
  accessKey: string
  hasPlaceholder: boolean
  placeholder: string
  required: boolean
  disabled: boolean
  readOnly: boolean
  checked: boolean
  multiple: boolean
  options: OptionView[]
}

export interface CogView {
  className: string
  field: FieldView
  title: TitleView | false
  description: DescriptionView | false
  errorMessage: ErrorMessageView | false
}

export type PreparedView = CogView | FieldView | TitleView | DescriptionView | ErrorMessageView | TextView | MarkerView

export type CogKind = 'checkbox' | 'email' | 'number' | 'password' | 'radio' | 'select' | 'text' | 'textarea'

export type ViewTemplateName =
  | `cogs/${CogKind}/index.mustache` |
  `cogs/${CogKind}/field.mustache` |
  `cogs/${CogKind}/title.mustache` |
  `cogs/${CogKind}/description.mustache` |
  `cogs/${CogKind}/error-message.mustache` |
  'components/field.mustache' |
  'components/title.mustache' |
  'components/description.mustache' |
  'components/error-message.mustache' |
  'components/common/text-content.mustache' |
  'components/common/required.mustache' |
  'components/common/disabled.mustache' |
  'components/common/readonly.mustache'

/** Names that accept raw component props through prepareView(). */
export declare const viewTemplateNames: readonly ViewTemplateName[]

export interface PrepareView {
  (name: `cogs/${CogKind}/index.mustache`, props?: Props): CogView
  (name: `cogs/${CogKind}/field.mustache` | 'components/field.mustache', props?: Props): FieldView
  (name: `cogs/${CogKind}/title.mustache` | 'components/title.mustache', props?: Props): TitleView
  (name: `cogs/${CogKind}/description.mustache` | 'components/description.mustache', props?: Props): DescriptionView
  (name: `cogs/${CogKind}/error-message.mustache` | 'components/error-message.mustache', props?: Props): ErrorMessageView
  (name: 'components/common/text-content.mustache', props?: Props): TextView
  (name: 'components/common/required.mustache' | 'components/common/disabled.mustache' | 'components/common/readonly.mustache', props?: Props): MarkerView
  (name: string, props?: Props): PreparedView
}

/** Returns unescaped, JSON-serialisable data. Throws for an unknown template name. */
export declare const prepareView: PrepareView
