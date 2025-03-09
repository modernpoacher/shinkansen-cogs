/**
 *  @typedef {CogsTypes.OnEventType} OnEventType
 *  @typedef {CogsTypes.Super.Components.Field.FieldProps} FieldProps
 *  @typedef {CogsTypes.Components.Field.ValueProps} ValueProps
 *  @typedef {CogsTypes.Components.Field.CheckProps} CheckProps
 */

/**
 *  Field component
 */
import PropTypes from 'prop-types'

import Field from '#cogs/super/components/field'

/**
 *  @type {OnEventType}
 */
function DEFAULT_HANDLE_EVENT () {
  //
}

/**
 * @param {{ current?: { value: string } }} fieldRef
 * @returns {string | undefined}
 */
function getCurrentValue ({ current }) {
  return (
    current
      ? current.value
      : undefined
  )
}

/**
 * @param {{ current?: { checked: boolean } }} fieldRef
 * @returns {boolean | undefined}
 */
function getCurrentChecked ({ current }) {
  return (
    current
      ? current.checked
      : undefined
  )
}

/**
 *  ValueField component
 *
 *  @extends {Field<FieldProps & ValueProps>}
 */
export class ValueField extends Field {
  /**
   *  @returns {void}
   */
  componentDidMount () {
    this.handleFieldRef()
  }

  /**
   *  @param {ValueProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) || // }, state) ||
      (props.value !== this.props.value)
    )
  }

  /**
   *  @returns {void}
   */
  componentDidUpdate () {
    this.handleFieldRef()
  }

  /**
   *  @returns {void}
   */
  handleFieldRef = () => {
    const {
      fieldRef,
      defaultValue,
      value = defaultValue
    } = this.props

    const currentValue = getCurrentValue(fieldRef)

    if (value !== currentValue) {
      const {
        onChange = DEFAULT_HANDLE_EVENT,
        name
      } = this.props

      onChange(name, currentValue)
    }
  }

  /**
   *  @param {{ target: { value?: string } }} event
   *  @returns {void}
   */
  handleChange = ({ target: { value } }) => {
    const {
      onChange = DEFAULT_HANDLE_EVENT,
      name
    } = this.props

    onChange(name, value)
  }
}

ValueField.propTypes = {
  ...Field.propTypes,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  fieldRef: PropTypes.shape({
    current: PropTypes.shape({
      value: PropTypes.string
    })
  }).isRequired
}

/**
 *  CheckField component
 *
 *  @extends {Field<FieldProps & CheckProps>}
 */
export class CheckField extends Field {
  /**
   *  @returns {void}
   */
  componentDidMount () {
    this.handleFieldRef()
  }

  /**
   *  @param {CheckProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    const {
      value,
      defaultChecked,
      checked,
      onClick,
      ...superProps
    } = props

    return (
      super.shouldComponentUpdate(superProps) ||
      (value !== this.props.value) ||
      (checked !== this.props.checked) ||
      (defaultChecked !== this.props.defaultChecked) ||
      (onClick !== this.props.onClick)
    )
  }

  /**
   *  @returns {void}
   */
  componentDidUpdate () {
    this.handleFieldRef()
  }

  /**
   *  @returns {void}
   */
  handleFieldRef = () => {
    const {
      fieldRef,
      value,
      defaultChecked,
      checked = defaultChecked
    } = this.props

    const currentValue = getCurrentValue(fieldRef)
    const currentChecked = getCurrentChecked(fieldRef)

    if (value !== currentValue || checked !== currentChecked) {
      const {
        onChange = DEFAULT_HANDLE_EVENT,
        name
      } = this.props

      onChange(name, currentValue, currentChecked)
    }
  }

  /**
   *  @param {{ target: { value?: string, checked?: boolean } }} event
   *  @returns {void}
   */
  handleChange = ({ target: { value, checked } }) => {
    const {
      onChange = DEFAULT_HANDLE_EVENT,
      name
    } = this.props

    onChange(name, value, checked)
  }

  /**
   *  @param {{ target: { value?: string, checked?: boolean } }} event
   *  @returns {void}
   */
  handleClick = ({ target: { value, checked } }) => {
    const {
      onClick = DEFAULT_HANDLE_EVENT,
      name
    } = this.props

    onClick(name, value, checked)
  }
}

CheckField.propTypes = {
  ...Field.propTypes,
  value: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onClick: PropTypes.func,
  fieldRef: PropTypes.shape({
    current: PropTypes.shape({
      value: PropTypes.string,
      checked: PropTypes.bool
    })
  }).isRequired
}
