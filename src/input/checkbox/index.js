/**
 * Checkbox component
 */
import React from 'react'
import Input from '~/src/input'

export default class Checkbox extends Input {
  getInputClassName () {
    return `${super.getInputClassName()} checkbox`
  }

  getValue () {
    return this.input.checked
  }

  getInput () {
    const {
      name,
      value,
      checked,
      required,
      disabled
    } = this.props

    return (
      <input
        id={this.getId()}
        name={name}
        defaultValue={value}
        defaultChecked={checked}
        required={required}
        disabled={disabled}
        className={this.getInputClassName()}
        type='checkbox'
        ref={this.setRef}
      />
    )
  }
}
