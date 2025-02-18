/**
 *  @typedef {CogsTypes.Components.Field.FieldProps} FieldProps
 *  @typedef {CogsTypes.Components.Field.ValueProps} ValueProps
 *  @typedef {CogsTypes.Components.Field.CheckProps} CheckProps
 */

/**
 * Field component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  DEFAULT_HANDLE_CHANGE,
  DEFAULT_HANDLE_CLICK
} from '#cogs/common'

export default class Field extends Component {
  getClassName () {
    return 'input'
  }

  /**
   *  @param {FieldProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (
      (props.id !== this.props.id) ||
      (props.required !== this.props.required) ||
      (props.disabled !== this.props.disabled) ||
      (props.readOnly !== this.props.readOnly) ||
      (props.tabIndex !== this.props.tabIndex) ||
      (props.accessKey !== this.props.accessKey) ||
      (props.placeholder !== this.props.placeholder) ||
      (props.onChange !== this.props.onChange)
    )
  }

  render () {
    const {
      id,
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      placeholder,
      fieldRef
    } = this.props

    return (
      <input
        id={id}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        placeholder={placeholder}
        className={this.getClassName()}
        ref={fieldRef}
      />
    )
  }
}

Field.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  tabIndex: PropTypes.number,
  accessKey: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  fieldRef: PropTypes.shape({
    current: PropTypes.shape({}).isRequired
  })
}

/**
 * ValueField component
 */
export class ValueField extends Field {
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
   *  @param {{ target: { value?: string } }} event
   */
  handleChange = ({ target: { value } }) => {
    const {
      onChange = DEFAULT_HANDLE_CHANGE,
      name
    } = this.props

    onChange(name, value)
  }
}

ValueField.propTypes = {
  ...Field.propTypes,
  value: PropTypes.string,
  defaultValue: PropTypes.string
}

/**
 * CheckField component
 */
export class CheckField extends Field {
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
   *  @param {{ target: { value?: string, checked?: boolean } }} event
   */
  handleChange = ({ target: { value, checked } }) => {
    const {
      onChange = DEFAULT_HANDLE_CHANGE,
      name
    } = this.props

    onChange(name, value, checked)
  }

  /**
   *  @param {{ target: { value?: string, checked?: boolean } }} event
   */
  handleClick = ({ target: { value, checked } }) => {
    const {
      onClick = DEFAULT_HANDLE_CLICK,
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
  onClick: PropTypes.func
}
