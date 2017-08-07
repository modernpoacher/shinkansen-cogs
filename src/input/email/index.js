/**
 * Email component
 */
import React from 'react'
import Input from '~/src/input'

export default class Email extends Input {
  getLabelClassName () {
    return `${super.getLabelClassName()} email`
  }

  getInputClassName () {
    return `${super.getInputClassName()} email`
  }

  renderInput () {
    const {
      name,
      value,
      required,
      disabled,
      readOnly,
      placeholder
    } = this.props

    return (
      <input
        id={this.getId()}
        name={name}
        defaultValue={value}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        className={this.getInputClassName()}
        type='email'
        ref={this.setInput}
      />
    )
  }
}

Email.defaultProps = {
  ...Input.defaultProps,
  label: 'Email'
}
