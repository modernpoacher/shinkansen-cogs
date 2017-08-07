/**
 * Textarea component
 */
import React from 'react'
import Input from '~/src/input'

export default class Textarea extends Input {
  getLabelClassName () {
    return `${super.getLabelClassName()} textarea`
  }

  getInputClassName () {
    return `${super.getInputClassName()} textarea`
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
      <textarea
        id={this.getId()}
        name={name}
        defaultValue={value}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        className={this.getInputClassName()}
        ref={this.setRef}
      />
    )
  }
}

Textarea.defaultProps = {
  ...Input.defaultProps,
  label: 'Textarea'
}
