/**
 * Textarea component
 */
import React from 'react'
import Input from '~/src/input'

export default class Textarea extends Input {
  getInputClassName () {
    return `${super.getInputClassName()} texarea`
  }

  getInput () {
    const {
      name,
      value,
      required,
      disabled,
      placeholder
    } = this.props

    return (
      <textarea
        id={this.getId()}
        name={name}
        defaultValue={value}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        className={this.getInputClassName()}
        ref={this.setRef}
      />
    )
  }
}
