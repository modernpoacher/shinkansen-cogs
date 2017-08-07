/**
 * Password component
 */
import React from 'react'
import Input from '~/src/input'

export default class Password extends Input {
  getLabelClassName () {
    return `${super.getLabelClassName()} password`
  }

  getInputClassName () {
    return `${super.getInputClassName()} password`
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
        type='password'
        ref={this.setRef}
      />
    )
  }
}

Password.defaultProps = {
  ...Input.defaultProps,
  label: 'Password'
}
