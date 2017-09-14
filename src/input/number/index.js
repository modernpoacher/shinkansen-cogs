/**
 * Number component
 */
import React from 'react'
import Input from 'shinkansen-cogs/input'

export default class Number extends Input {
  getLabelClassName () {
    return `${super.getLabelClassName()} number`
  }

  getInputClassName () {
    return `${super.getInputClassName()} number`
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
        type='number'
        ref={this.setInput}
      />
    )
  }
}

Number.defaultProps = {
  ...Input.defaultProps,
  label: 'Number'
}
