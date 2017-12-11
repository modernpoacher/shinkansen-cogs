/**
 * PasswordInput component
 */
import React from 'react'
import classnames from 'classnames'
import { ValueInput } from 'shinkansen-cogs/components/input'

export default class PasswordInput extends ValueInput {
  getClassName () {
    return classnames(super.getClassName(), 'password')
  }

  render () {
    const {
      id,
      name,
      value,
      defaultValue,
      required,
      disabled,
      readOnly,
      tabIndex,
      accessKey,
      placeholder
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
        ref={this.setInput}
      />
    )
  }
}

PasswordInput.propTypes = {
  ...ValueInput.propTypes
}

PasswordInput.defaultProps = {
  ...ValueInput.defaultProps,
  label: 'Password'
}
