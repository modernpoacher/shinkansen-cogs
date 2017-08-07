/**
 * Checkbox component
 */
import React from 'react'
import Input from '~/src/input'

export default class Checkbox extends Input {
  getValue () {
    return this.getInput()
      .checked
  }

  setValue (checked) {
    this.getInput()
      .checked = checked
  }

  getLabelClassName () {
    return `${super.getLabelClassName()} checkbox`
  }

  getInputClassName () {
    return `${super.getInputClassName()} checkbox`
  }

  renderInput () {
    const {
      name,
      value,
      checked,
      required,
      disabled,
      readOnly
    } = this.props

    return (
      <input
        id={this.getId()}
        name={name}
        defaultValue={value}
        defaultChecked={checked}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        className={this.getInputClassName()}
        type='checkbox'
        ref={this.setInput}
      />
    )
  }
}

Checkbox.defaultProps = {
  ...Input.defaultProps,
  label: 'Checkbox'
}
