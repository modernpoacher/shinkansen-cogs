import debug from 'debug'

const log = debug('shinkansen:cogs:transformers:error-message')

export function getErrorTextForMaxItems (components = {}) {
  log('getErrorTextForMaxItems')

  return 'Max items'
}

export function getErrorTextForMinItems (components = {}) {
  log('getErrorTextForMinItems')

  return 'Min items'
}

export function getErrorTextForMaxLength (components = {}) {
  log('getErrorTextForMaxLength')

  return 'Max length'
}

export function getErrorTextForMinLength (components = {}) {
  log('getErrorTextForMinLength')

  return 'Min length'
}

export function getErrorTextForMaxProperties (components = {}) {
  log('getErrorTextForMaxProperties')

  return 'Max properties'
}

export function getErrorTextForMinProperties (components = {}) {
  log('getErrorTextForMinProperties')

  return 'Min properties'
}

export function getErrorTextForAdditionalItems (components = {}) {
  log('getErrorTextForAdditionalItems')

  return 'Additional items'
}

export function getErrorTextForMaximum (components = {}) {
  log('getErrorTextForMaximum')

  return 'Maximum'
}

export function getErrorTextForMinimum (components = {}) {
  log('getErrorTextForMinimum')

  return 'Minimum'
}

export function getErrorTextForFormat (components = {}) {
  log('getErrorTextForFormat')

  return 'Format'
}

export function getErrorTextForAdditionalProperties (components = {}) {
  log('getErrorTextForAdditionalProperties')

  return 'Additional properties'
}

export function getErrorTextForDependencies (components = {}) {
  log('getErrorTextForDependencies')

  return 'Dependencies'
}

export function getErrorTextForUniqeItems (components = {}) {
  log('getErrorTextForUniqeItems')

  return 'Unique items'
}

export function getErrorTextForPropertyRequired (components = {}) {
  log('getErrorTextForPropertyRequired')

  return 'Property required'
}

export function getErrorTextForPropertyNames (components = {}) {
  log('getErrorTextForPropertyNames')

  return 'Property names'
}

export function getErrorTextForPatternRequired (components = {}) {
  log('getErrorTextForMultipleOf')

  return 'Pattern required'
}

export function getErrorTextForMultipleOf (components = {}) {
  log('getErrorTextForMultipleOf')

  return 'Multiple of'
}

export function getErrorTextForPattern (components = {}) {
  log('getErrorTextForPattern')

  return 'Pattern'
}

export function getErrorTextForConst (components = {}) {
  log('getErrorTextForConst')

  return 'Const'
}

export function getErrorTextForEnum (components = {}) {
  log('getErrorTextForEnum')

  return 'Enum'
}

export function getErrorTextFor$Ref (components = {}) {
  log('getErrorTextFor$Ref')

  return '$Ref'
}

export function getErrorTextForOneOf (components = {}) {
  log('getErrorTextForOneOf')

  return 'One of'
}

export function getErrorTextForUnknown (components = {}) {
  log('getErrorTextForUnknown')

  return 'Unknown'
}

export function getErrorTextForTypeInvalid ({ expectedType } = {}, components = {}) {
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

export function getErrorTextByType ({ type, params } = {}, components = {}) {
  log('getErrorTextByType')

  switch (type) {
    case 'MAX_ITEMS':
      return getErrorTextForMaxItems(components)
    case 'MIN_ITEMS':
      return getErrorTextForMinItems(components)
    case 'MAX_LENGTH':
      return getErrorTextForMaxLength(components)
    case 'MIN_LENGTH':
      return getErrorTextForMinLength(components)
    case 'MAX_PROPERTIES':
      return getErrorTextForMaxProperties(components)
    case 'MIN_PROPERTIES':
      return getErrorTextForMinProperties(components)
    case 'ADDITIONAL_ITEMS':
      return getErrorTextForAdditionalItems(components)
    case 'MAXIMUM':
      return getErrorTextForMaximum(components)
    case 'MINIMUM':
      return getErrorTextForMinimum(components)
    case 'FORMAT':
      return getErrorTextForFormat(components)
    case 'ADDITIONAL_PROPERTIES':
      return getErrorTextForAdditionalProperties(components)
    case 'DEPENDENCIES':
      return getErrorTextForDependencies(components)
    case 'UNIQUE_ITEMS':
      return getErrorTextForUniqeItems(components)
    case 'PROPERTY_REQUIRED':
      return getErrorTextForPropertyRequired(components)
    case 'PROPERTY_NAMES':
      return getErrorTextForPropertyNames(components)
    case 'PATTERN_REQUIRED':
      return getErrorTextForPatternRequired(components)
    case 'TYPE_INVALID':
      return getErrorTextForTypeInvalid(params, components)
    case 'MULTIPLE_OF':
      return getErrorTextForMultipleOf(components)
    case 'PATTERN':
      return getErrorTextForPattern(components)
    case 'CONST':
      return getErrorTextForConst(components)
    case 'ENUM':
      return getErrorTextForEnum(components)
    case '$REF':
      return getErrorTextFor$Ref(components)
    case 'ONE_OF':
      return getErrorTextForOneOf(components)
    case 'UNKNOWN':
      return getErrorTextForUnknown(components)
    default:
      throw new Error('Incompatible with Shinkansen')
  }
}

export function getErrorHref ({ uri = '' } = {}) {
  log('getErrorHref')

  return '#'.concat(uri)
}

export default function transform (error, components) {
  log('transform')

  return {
    text: getErrorTextByType(error, components),
    href: getErrorHref(error)
  }
}
