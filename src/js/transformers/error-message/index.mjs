import debug from 'debug'

const log = debug('shinkansen-cogs/transformers/error-message')

log('`shinkansen` is awake')

export function getErrorTextForMaxItems () {
  log('getErrorTextForMaxItems')

  return 'Max items'
}

export function getErrorTextForMinItems () {
  log('getErrorTextForMinItems')

  return 'Min items'
}

export function getErrorTextForMaxLength () {
  log('getErrorTextForMaxLength')

  return 'Max length'
}

export function getErrorTextForMinLength () {
  log('getErrorTextForMinLength')

  return 'Min length'
}

export function getErrorTextForMaxProperties () {
  log('getErrorTextForMaxProperties')

  return 'Max properties'
}

export function getErrorTextForMinProperties () {
  log('getErrorTextForMinProperties')

  return 'Min properties'
}

export function getErrorTextForAdditionalItems () {
  log('getErrorTextForAdditionalItems')

  return 'Additional items'
}

export function getErrorTextForMaximum () {
  log('getErrorTextForMaximum')

  return 'Maximum'
}

export function getErrorTextForMinimum () {
  log('getErrorTextForMinimum')

  return 'Minimum'
}

export function getErrorTextForFormat () {
  log('getErrorTextForFormat')

  return 'Format'
}

export function getErrorTextForAdditionalProperties () {
  log('getErrorTextForAdditionalProperties')

  return 'Additional properties'
}

export function getErrorTextForDependencies () {
  log('getErrorTextForDependencies')

  return 'Dependencies'
}

export function getErrorTextForUniqeItems () {
  log('getErrorTextForUniqeItems')

  return 'Unique items'
}

export function getErrorTextForPropertyRequired () {
  log('getErrorTextForPropertyRequired')

  return 'Property required'
}

export function getErrorTextForPropertyNames () {
  log('getErrorTextForPropertyNames')

  return 'Property names'
}

export function getErrorTextForPatternRequired () {
  log('getErrorTextForMultipleOf')

  return 'Pattern required'
}

export function getErrorTextForMultipleOf () {
  log('getErrorTextForMultipleOf')

  return 'Multiple of'
}

export function getErrorTextForPattern () {
  log('getErrorTextForPattern')

  return 'Pattern'
}

export function getErrorTextForConst () {
  log('getErrorTextForConst')

  return 'Const'
}

export function getErrorTextForEnum () {
  log('getErrorTextForEnum')

  return 'Enum'
}

export function getErrorTextFor$Ref () {
  log('getErrorTextFor$Ref')

  return '$Ref'
}

export function getErrorTextForOneOf () {
  log('getErrorTextForOneOf')

  return 'One of'
}

export function getErrorTextForUnknown () {
  log('getErrorTextForUnknown')

  return 'Unknown'
}

/**
 *  @param {{ expectedType?: string }} params
 *  @returns {string}
 */
export function getErrorTextForTypeInvalid ({ expectedType } = {}) {
  log('getErrorTextForTypeInvalid')

  switch (expectedType) {
    case 'string':
      return 'Type invalid (expected string)'
    case 'number':
      return 'Type invalid (expected number)'
    case 'object':
      return 'Type invalid (expected object)'
    case 'array':
      return 'Type invalid (expected array)'
    case 'boolean':
      return 'Type invalid (expected boolean)'
    case 'null':
      return 'Type invalid (expected null)'
    default:
      throw new Error('Incompatible with Shinkansen')
  }
}

/**
 *  @param {{ type?: string, params?: Record<PropertyKey, unknown> }} params
 *  @returns {string}
 */
export function getErrorTextByType ({ type, params } = {}) {
  log('getErrorTextByType')

  switch (type) {
    case 'MAX_ITEMS':
      return getErrorTextForMaxItems()
    case 'MIN_ITEMS':
      return getErrorTextForMinItems()
    case 'MAX_LENGTH':
      return getErrorTextForMaxLength()
    case 'MIN_LENGTH':
      return getErrorTextForMinLength()
    case 'MAX_PROPERTIES':
      return getErrorTextForMaxProperties()
    case 'MIN_PROPERTIES':
      return getErrorTextForMinProperties()
    case 'ADDITIONAL_ITEMS':
      return getErrorTextForAdditionalItems()
    case 'MAXIMUM':
      return getErrorTextForMaximum()
    case 'MINIMUM':
      return getErrorTextForMinimum()
    case 'FORMAT':
      return getErrorTextForFormat()
    case 'ADDITIONAL_PROPERTIES':
      return getErrorTextForAdditionalProperties()
    case 'DEPENDENCIES':
      return getErrorTextForDependencies()
    case 'UNIQUE_ITEMS':
      return getErrorTextForUniqeItems()
    case 'PROPERTY_REQUIRED':
      return getErrorTextForPropertyRequired()
    case 'PROPERTY_NAMES':
      return getErrorTextForPropertyNames()
    case 'PATTERN_REQUIRED':
      return getErrorTextForPatternRequired()
    case 'TYPE_INVALID':
      return getErrorTextForTypeInvalid(params)
    case 'MULTIPLE_OF':
      return getErrorTextForMultipleOf()
    case 'PATTERN':
      return getErrorTextForPattern()
    case 'CONST':
      return getErrorTextForConst()
    case 'ENUM':
      return getErrorTextForEnum()
    case '$REF':
      return getErrorTextFor$Ref()
    case 'ONE_OF':
      return getErrorTextForOneOf()
    case 'UNKNOWN':
      return getErrorTextForUnknown()
    default:
      throw new Error('Incompatible with Shinkansen')
  }
}

/**
 *  @param {{ uri?: string }} [params]
 *  @returns {string}
 */
export function getErrorHref ({ uri = '' } = {}) {
  log('getErrorHref')

  return '#'.concat(uri)
}

/**
 *  @param {CogsTypes.ErrorDefinitionType} error
 *  @returns {CogsTypes.FieldErrorType}
 */
export default function transform (error) {
  log('transform')

  return {
    text: getErrorTextByType(error),
    href: getErrorHref(error)
  }
}
