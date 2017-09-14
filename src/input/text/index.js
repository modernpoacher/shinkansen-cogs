/**
 * Text component
 */
import React from 'react'
import Input from 'shinkansen-cogs/input'

export default class Text extends Input {
  getLabelClassName () {
    return `${super.getLabelClassName()} text`
  }

  getInputClassName () {
    return `${super.getInputClassName()} text`
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
        type='text'
        ref={this.setInput}
      />
    )
  }
}

Text.defaultProps = {
  ...Input.defaultProps,
  label: 'Text'
}
