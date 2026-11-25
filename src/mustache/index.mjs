/**
 * @typedef {import('./index.mjs').Props} Props
 * @typedef {import('./index.mjs').FieldView} FieldView
 * @typedef {import('./index.mjs').OptionView} OptionView
 * @typedef {import('./index.mjs').OptionsType} OptionsType
 * @typedef {import('./index.mjs').PreparedView} PreparedView
 */
import debug from 'debug'

import transformError from '#cogs/transformers/error-message'

const log = debug('shinkansen-cogs')

log('`shinkansen` is awake')

/**
 * @param {unknown} value
 */
function hasAttribute (value) {
  return (
    value !== undefined &&
    value !== null &&
    typeof value !== 'boolean' &&
    typeof value !== 'function' &&
    typeof value !== 'symbol'
  )
}

/**
 * @param {unknown} value
 */
function getAttribute (value) {
  return hasAttribute(value) ? String(value) : ''
}

/**
 * @param {unknown} value
 */
function inputValue (value) {
  return value === undefined ? '' : String(value)
}

/**
 * @param {string} component
 * @param {string} cogType
 */
function className (component, cogType) {
  return cogType ? `${component} ${cogType}` : component
}

/**
 * @param {Props} props
 * @param {string} cogType
 * @param {string | undefined} id
 */
function titleView (props, cogType, id) {
  return {
    hasTitle: !!(id && props.title),
    className: className('title', cogType),
    id: getAttribute(id),
    text: props.title || '',
    required: !!props.required,
    disabled: !!props.disabled,
    readOnly: !!props.readOnly
  }
}

/**
 * @param {Props} props
 * @param {string} cogType
 */
function descriptionView (props, cogType) {
  return { hasDescription: !!props.description, className: className('description', cogType), text: props.description || '' }
}

/**
 * @param {Props} props
 * @param {string} cogType
 */
function errorMessageView (props, cogType) {
  return {
    hasErrorMessage: !!props.errorMessage,
    className: className('error-message', cogType),
    text: props.errorMessage ? transformError(props.errorMessage).text : ''
  }
}

/**
 * @param {Props} props
 * @returns {string[]}
 */
function selectedValues (props) {
  const value = props.defaultValue === undefined ? props.value : props.defaultValue
  if (props.multiple && Array.isArray(value)) return value.map(String)
  return [props.defaultValue === undefined ? inputValue(value) : String(value)]
}

/**
 * @param {OptionsType} items
 * @param {string[]} selectedValues
 * @returns {OptionView[]}
 */
function optionViews (items, selectedValues) {
  if (!Array.isArray(items)) throw new TypeError('Mustache select options must be an array')

  return items.map(item => {
    if (!item || typeof item !== 'object') throw new TypeError('Mustache select options must be option or group objects')

    const isGroup = 'options' in item
    if (isGroup && (typeof item.label !== 'string' || !Array.isArray(item.options))) {
      throw new TypeError('Mustache select groups require a label string and an options array')
    }
    if (!isGroup && typeof item.text !== 'string') throw new TypeError('Mustache select options require a text string')

    const option = isGroup ? null : item
    const hasValue = Boolean(option && hasAttribute(option.value)) // null && hasAttribute(null.value) === null

    return {
      isGroup,
      isOption: !isGroup,
      hasValue,
      value: option ? getAttribute(option.value) : '',
      hasLabel: hasAttribute(item.label),
      label: getAttribute(item.label),
      text: option ? option.text : '',
      disabled: !!item.disabled,
      selected: !!option && selectedValues.includes(String(option.value ?? option.text)),
      ...(isGroup ? { options: optionViews(item.options, selectedValues) } : {})
    }
  })
}

/**
 * @param {Props} props
 * @param {string} cogType
 * @param {string | undefined} id
 * @returns {FieldView}
 */
function fieldView (props, cogType, id) {
  const isCheckCog = cogType === 'checkbox' || cogType === 'radio'
  const hasValue = !!cogType || hasAttribute(props.value)
  const value = cogType && !isCheckCog && props.defaultValue !== undefined ? String(props.defaultValue) : inputValue(props.value)
  const isTextareaCog = cogType === 'textarea'
  const isSelectCog = cogType === 'select'
  const checked = isCheckCog && (typeof props.checked === 'boolean' ? props.checked : !!props.defaultChecked)

  return {
    className: className('input', cogType),
    hasName: hasAttribute(props.name),
    name: getAttribute(props.name),
    hasId: hasAttribute(id),
    id: getAttribute(id),
    hasValue,
    value,
    hasType: !!cogType && !isTextareaCog && !isSelectCog,
    type: cogType,
    hasTabIndex: hasAttribute(props.tabIndex),
    tabIndex: getAttribute(props.tabIndex),
    hasAccessKey: hasAttribute(props.accessKey),
    accessKey: getAttribute(props.accessKey),
    hasPlaceholder: !isCheckCog && !isSelectCog && hasAttribute(props.placeholder),
    placeholder: getAttribute(props.placeholder),
    required: !!props.required,
    disabled: !!props.disabled,
    readOnly: !!props.readOnly,
    checked,
    ...(isSelectCog
      ? {
          multiple: !!props.multiple,
          options: optionViews(props.options || [], selectedValues(props))
        }
      : {})
  }
}

/**
 * Resolve static component behaviour into unescaped, JSON-serialisable data.
 * No rendering engine, filesystem access, or React is used here.
 * @param {string} name
 * @param {Props} [props]
 * @returns {PreparedView}
 */
export function prepareView (name, props = {}) {
  const parts = name.replace(/\.mustache$/, '').split('/')
  const cogType = parts[0] === 'cogs' ? parts[1] : ''
  const part = parts[parts.length - 1]

  switch (part) {
    case 'index': {
      const id = props.id || props.name
      const title = titleView(props, cogType, id)
      const description = descriptionView(props, cogType)
      const errorMessage = errorMessageView(props, cogType)
      const className = [
        'cog',
        props.required && 'required',
        props.disabled && 'disabled',
        props.readOnly && 'readOnly',
        props.errorMessage && 'error',
        cogType
      ].filter(Boolean).join(' ')

      return {
        className,
        field: fieldView(props, cogType, id),
        title: title.hasTitle ? title : false,
        description: description.hasDescription ? description : false,
        errorMessage: errorMessage.hasErrorMessage ? errorMessage : false
      }
    }
    case 'title': return titleView(props, cogType, props.id)
    case 'description': return descriptionView(props, cogType)
    case 'error-message': return errorMessageView(props, cogType)
    case 'field': return fieldView(props, cogType, props.id)
    case 'text-content': return { hasText: !!props.textContent, text: props.textContent || '' }
    default: return { className: `is-${part}`, text: '*' }
  }
}
