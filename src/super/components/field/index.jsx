/**
 *  @typedef {CogsTypes.Super.Components.Field.FieldProps} FieldProps
 */

/**
 *  Field component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
