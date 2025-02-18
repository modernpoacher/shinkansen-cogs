/**
 *  @typedef {CogsTypes.Components.Field.ValueProps} ValueProps
 *  @typedef {CogsTypes.Components.Field.Password.PasswordProps} PasswordProps
 */

/**
 * PasswordField component
 */
import React from 'react'
import classnames from 'classnames'

import {
  ValueField
} from '#cogs/components/field'

/**
 *  @extends {ValueField<ValueProps & PasswordProps>}
 */
export default class PasswordField extends ValueField {
  getClassName () {
    return classnames(super.getClassName(), 'password')
  }

  render () {
    const {
      id,
      name,
      value,
      defaultValue,
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      placeholder,
      fieldRef
    } = this.props

    const className = this.getClassName()

    return (
      <input
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        placeholder={placeholder}
        onChange={this.handleChange}
        className={className}
        type='password'
        ref={fieldRef}
      />
    )
  }
}
