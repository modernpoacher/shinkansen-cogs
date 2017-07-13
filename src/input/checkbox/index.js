/**
 * Checkbox component
 */
import React from 'react'
import Input from '~/src/input'

export default class Checkbox extends Input {
  getInputClassName () {
    return 'checkbox'
  }

  getValue () {
    return this.input.checked
  }

  getInput () {
    const {
      name,
      value,
      required,
      checked
    } = this.props

    return (
      <input
        id={this.getId()}
        name={name}
        defaultValue={value}
        defaultChecked={checked}
        required={this.getRequired()}
        disabled={this.getDisabled()}
        className={this.getInputClassName()}
        type='checkbox'
        ref={this.setRef}
      />
    )
  }
}
