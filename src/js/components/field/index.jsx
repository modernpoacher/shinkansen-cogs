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
 * @param {unknown} value
 * @returns {string}
 */
export function toInputValue (value) {
  return (value === undefined) ? '' : String(value)
}

/**
 *  ValueField component
 *
 *  @extends {Field<FieldProps & ValueProps>}
 */
export class ValueField extends Field {}

ValueField.propTypes = {
  ...Field.propTypes,
  defaultValue: PropTypes.string
}

/**
 *  CheckField component
 *
 *  @extends {Field<FieldProps & CheckProps>}
 */
export class CheckField extends Field {
  /**
   *  @param {CheckProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    const {
      checked,
      defaultChecked,
      onClick,
      ...superProps
    } = props

    return (
      (checked !== this.props.checked) ||
      (defaultChecked !== this.props.defaultChecked) ||
      super.shouldComponentUpdate(superProps) ||
      (onClick !== this.props.onClick)
    )
  }

  /**
   *  @param {{ target: { value?: string, checked?: boolean } }} event
   *  @returns {void}
   */
  handleChange = ({ target: { value, checked } }) => {
    const {
      onChange = DEFAULT_HANDLE_EVENT
    } = this.props

    onChange(value, checked)
  }

  /**
   *  @param {{ target: { value?: string, checked?: boolean } }} event
   *  @returns {void}
   */
  handleClick = ({ target: { value, checked } }) => {
    const {
      onClick = DEFAULT_HANDLE_EVENT
    } = this.props

    onClick(value, checked)
  }
}

CheckField.propTypes = {
  ...Field.propTypes,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onClick: PropTypes.func
}
