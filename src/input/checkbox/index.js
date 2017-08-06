/**
 * Checkbox component
 */
import React from 'react'
import Input from '~/src/input'

export default class Checkbox extends Input {
  getLabelClassName () {
    return `${super.getLabelClassName()} checkbox`
  }

  getInputClassName () {
    return `${super.getInputClassName()} checkbox`
  }

  getValue () {
    const { checked } = this.getRef()

    return checked
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
        ref={this.setRef}
      />
    )
  }
}
