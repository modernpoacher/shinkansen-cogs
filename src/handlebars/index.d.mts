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

/** Fixed marker partials do not consume view data. */
export type StaticView = Record<string, never>

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

export type PreparedView = CogView | FieldView | TitleView | DescriptionView | ErrorMessageView | TextView | StaticView

export type CogKind = 'checkbox' | 'email' | 'number' | 'password' | 'radio' | 'select' | 'text' | 'textarea'

export type ViewTemplateName =
  | `cogs/${CogKind}/index.hbs` |
  `cogs/${CogKind}/field.hbs` |
  `cogs/${CogKind}/title.hbs` |
  `cogs/${CogKind}/description.hbs` |
  `cogs/${CogKind}/error-message.hbs` |
  'components/field.hbs' |
  'components/title.hbs' |
  'components/description.hbs' |
  'components/error-message.hbs' |
  'components/common/text-content.hbs' |
  'components/common/required.hbs' |
  'components/common/disabled.hbs' |
  'components/common/readonly.hbs'

/** Names that accept raw component props through prepareView(). */
export declare const viewTemplateNames: readonly ViewTemplateName[]

export interface PrepareView {
  (name: `cogs/${CogKind}/index.hbs`, props?: Props): CogView
  (name: `cogs/${CogKind}/field.hbs` | 'components/field.hbs', props?: Props): FieldView
  (name: `cogs/${CogKind}/title.hbs` | 'components/title.hbs', props?: Props): TitleView
  (name: `cogs/${CogKind}/description.hbs` | 'components/description.hbs', props?: Props): DescriptionView
  (name: `cogs/${CogKind}/error-message.hbs` | 'components/error-message.hbs', props?: Props): ErrorMessageView
  (name: 'components/common/text-content.hbs', props?: Props): TextView
  (name: 'components/common/required.hbs' | 'components/common/disabled.hbs' | 'components/common/readonly.hbs', props?: Props): StaticView
  (name: string, props?: Props): PreparedView
}

/** Returns unescaped, JSON-serialisable data. Throws for an unknown template name. */
export declare const prepareView: PrepareView
